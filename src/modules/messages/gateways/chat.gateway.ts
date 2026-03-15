/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/require-await */
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsException,
} from '@nestjs/websockets';
import { UseGuards, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { Server, Socket } from 'socket.io';
import { MessagesService } from '../services/messages.service';
import {
  MessageCreatedEvent,
  MessageDeletedEvent,
  MessageEditedEvent,
  MessagePinnedEvent,
  MessageUnpinnedEvent,
  ReactionAddedEvent,
  ReactionRemovedEvent,
} from '../events';
import {
  SendMessageCommand,
  EditMessageCommand,
  DeleteMessageCommand,
  AddReactionCommand,
  RemoveReactionCommand,
} from '../commands';
import { MessageType } from 'generated/prisma/client/enums';
import { JwtPayload } from '@src/modules/iam/interfaces/jwt-payload.interface';
import { PresenceService } from '@src/common/services/presence.service';
import { RedisService } from '@src/common/services/redis.service';
import { AppConfigService } from '@src/config/app.config';
import { WsJwtGuard } from '@src/common/guards';
import { WsCurrentUser } from '@src/common/decorators';

// ── WS Event payload types ────────────────────────────────────────────────────

interface WsSendMessagePayload {
  roomId?: string;
  dmConversationId?: string;
  type?: MessageType;
  content?: string;
  mediaUrl?: string;
  replyToId?: string;
  clientTempId?: string;
}

interface WsEditMessagePayload {
  messageId: string;
  content: string;
}

interface WsDeleteMessagePayload {
  messageId: string;
}

interface WsReactionPayload {
  messageId: string;
  emoji: string;
}

interface WsJoinRoomPayload {
  roomId: string;
}

interface WsSyncRequestPayload {
  roomId?: string;
  dmConversationId?: string;
  since: string; // ISO date string — last known message timestamp
  limit?: number;
}

interface WsStatusPayload {
  messageId: string;
  status: 'delivered' | 'read';
}

// ── Gateway ───────────────────────────────────────────────────────────────────

@WebSocketGateway({
  namespace: '/chat',
  cors: { origin: '*', credentials: true }, // overridden by AppConfigService in onModuleInit
  transports: ['websocket', 'polling'],
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server!: Server;

  private readonly logger = new Logger(ChatGateway.name);

  constructor(
    private readonly messagesService: MessagesService,
    private readonly presence: PresenceService,
    private readonly redis: RedisService,
    private readonly config: AppConfigService,
  ) {}

  // ── Init — wire Redis adapter ─────────────────────────────────────────────
  // async afterInit(server: Server) {
  //   const client = this.redis.getClient();
  //   const subClient = client.duplicate();

  //   await new Promise<void>((resolve) => {
  //     subClient.once('connect', resolve);
  //   });

  //   const adapter = createAdapter(client, subClient);
  //   server.adapter(adapter);
  //   this.logger.log('Socket.io Redis adapter wired');
  // }

  // ── Connection ────────────────────────────────────────────────────────────
  async handleConnection(client: Socket) {
    // Auth is validated by WsJwtGuard on each @SubscribeMessage
    // For connection-level auth, we do a quick token check here too
    const token =
      client.handshake.auth?.token ||
      client.handshake.headers?.authorization?.replace('Bearer ', '');

    if (!token) {
      this.logger.warn(
        `Client ${client.id} connected without token — disconnecting`,
      );
      client.emit('error', { code: 'UNAUTHORIZED', message: 'Token required' });
      client.disconnect();
      return;
    }

    this.logger.log(`Client connected: ${client.id}`);
  }

  // ── Disconnection ─────────────────────────────────────────────────────────
  async handleDisconnect(client: Socket) {
    const user = client.data?.user as JwtPayload | undefined;
    if (!user) return;

    await this.presence.setOffline(user.sub);

    // Leave all rooms this socket was in and update presence
    const rooms = Array.from(client.rooms).filter((r) => r !== client.id);
    await Promise.all(
      rooms.map((roomId) => this.presence.leaveRoom(roomId, user.sub)),
    );

    // Broadcast offline status to relevant rooms
    for (const roomId of rooms) {
      this.server.to(roomId).emit('presence:update', {
        userId: user.sub,
        isOnline: false,
        lastSeenAt: new Date().toISOString(),
      });
    }

    this.logger.log(`Client disconnected: ${client.id} (user: ${user.sub})`);
  }

  // ── Join Room ─────────────────────────────────────────────────────────────
  @UseGuards(WsJwtGuard)
  @SubscribeMessage('room:join')
  async handleJoinRoom(
    @ConnectedSocket() client: Socket,
    @WsCurrentUser() user: JwtPayload,
    @MessageBody() payload: WsJoinRoomPayload,
  ) {
    await client.join(payload.roomId);
    await Promise.all([
      this.presence.setOnline(user.sub),
      this.presence.joinRoom(payload.roomId, user.sub),
    ]);

    // Notify room of new online member
    client.to(payload.roomId).emit('presence:update', {
      userId: user.sub,
      handle: user.handle,
      name: user.name,
      isOnline: true,
    });

    // Mark room messages as delivered on join
    await this.messagesService.markRoomDelivered(payload.roomId, user.sub);

    const onlineCount = await this.presence.getRoomOnlineCount(payload.roomId);
    client.emit('room:joined', { roomId: payload.roomId, onlineCount });
  }

  // ── Leave Room ────────────────────────────────────────────────────────────
  @UseGuards(WsJwtGuard)
  @SubscribeMessage('room:leave')
  async handleLeaveRoom(
    @ConnectedSocket() client: Socket,
    @WsCurrentUser() user: JwtPayload,
    @MessageBody() payload: WsJoinRoomPayload,
  ) {
    await client.leave(payload.roomId);
    await this.presence.leaveRoom(payload.roomId, user.sub);

    client.to(payload.roomId).emit('presence:update', {
      userId: user.sub,
      isOnline: false,
    });
  }

  // ── Send Message ──────────────────────────────────────────────────────────
  @UseGuards(WsJwtGuard)
  @SubscribeMessage('message:send')
  async handleSendMessage(
    @WsCurrentUser() user: JwtPayload,
    @MessageBody() payload: WsSendMessagePayload,
  ) {
    try {
      const message = await this.messagesService.send(
        new SendMessageCommand(
          user.sub,
          payload.type ?? MessageType.TEXT,
          payload.content,
          payload.mediaUrl,
          payload.replyToId,
          payload.clientTempId,
          payload.roomId,
          payload.dmConversationId,
        ),
      );
      // Ack back to sender with server-authoritative message (replaces optimistic)
      return { event: 'message:ack', data: message };
    } catch (err: any) {
      throw new WsException(err.message);
    }
  }

  // ── Edit Message ──────────────────────────────────────────────────────────
  @UseGuards(WsJwtGuard)
  @SubscribeMessage('message:edit')
  async handleEditMessage(
    @WsCurrentUser() user: JwtPayload,
    @MessageBody() payload: WsEditMessagePayload,
  ) {
    try {
      const message = await this.messagesService.edit(
        new EditMessageCommand(payload.messageId, user.sub, payload.content),
      );
      return { event: 'message:edit:ack', data: message };
    } catch (err: any) {
      throw new WsException(err.message);
    }
  }

  // ── Delete Message ────────────────────────────────────────────────────────
  @UseGuards(WsJwtGuard)
  @SubscribeMessage('message:delete')
  async handleDeleteMessage(
    @WsCurrentUser() user: JwtPayload,
    @MessageBody() payload: WsDeleteMessagePayload,
  ) {
    try {
      await this.messagesService.delete(
        new DeleteMessageCommand(payload.messageId, user.sub, user.role),
      );
      return {
        event: 'message:delete:ack',
        data: { messageId: payload.messageId },
      };
    } catch (err: any) {
      throw new WsException(err.message);
    }
  }

  // ── Reactions ─────────────────────────────────────────────────────────────
  @UseGuards(WsJwtGuard)
  @SubscribeMessage('message:react')
  async handleReact(
    @WsCurrentUser() user: JwtPayload,
    @MessageBody() payload: WsReactionPayload,
  ) {
    try {
      await this.messagesService.addReaction(
        new AddReactionCommand(payload.messageId, user.sub, payload.emoji),
      );
    } catch (err: any) {
      throw new WsException(err.message);
    }
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('message:unreact')
  async handleUnreact(
    @WsCurrentUser() user: JwtPayload,
    @MessageBody() payload: WsReactionPayload,
  ) {
    try {
      await this.messagesService.removeReaction(
        new RemoveReactionCommand(payload.messageId, user.sub, payload.emoji),
      );
    } catch (err: any) {
      throw new WsException(err.message);
    }
  }

  // ── Typing indicators ─────────────────────────────────────────────────────
  @UseGuards(WsJwtGuard)
  @SubscribeMessage('typing:start')
  async handleTypingStart(
    @ConnectedSocket() client: Socket,
    @WsCurrentUser() user: JwtPayload,
    @MessageBody() payload: { roomId?: string; dmConversationId?: string },
  ) {
    if (payload.roomId) {
      await this.presence.setTypingInRoom(payload.roomId, user.sub);
      client.to(payload.roomId).emit('typing:update', {
        userId: user.sub,
        handle: user.handle,
        isTyping: true,
        roomId: payload.roomId,
      });
    }
    if (payload.dmConversationId) {
      await this.presence.setTypingInDm(payload.dmConversationId, user.sub);
      client.to(payload.dmConversationId).emit('typing:update', {
        userId: user.sub,
        handle: user.handle,
        isTyping: true,
        dmConversationId: payload.dmConversationId,
      });
    }
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('typing:stop')
  async handleTypingStop(
    @ConnectedSocket() client: Socket,
    @WsCurrentUser() user: JwtPayload,
    @MessageBody() payload: { roomId?: string; dmConversationId?: string },
  ) {
    if (payload.roomId) {
      await this.presence.clearTypingInRoom(payload.roomId, user.sub);
      client.to(payload.roomId).emit('typing:update', {
        userId: user.sub,
        isTyping: false,
        roomId: payload.roomId,
      });
    }
  }

  // ── Presence heartbeat ────────────────────────────────────────────────────
  @UseGuards(WsJwtGuard)
  @SubscribeMessage('presence:heartbeat')
  async handleHeartbeat(@WsCurrentUser() user: JwtPayload) {
    await this.presence.heartbeat(user.sub);
  }

  // ── Message status updates ────────────────────────────────────────────────
  @UseGuards(WsJwtGuard)
  @SubscribeMessage('message:status')
  async handleStatusUpdate(
    @WsCurrentUser() user: JwtPayload,
    @MessageBody() payload: WsStatusPayload,
  ) {
    if (payload.status === 'read') {
      await this.messagesService.markRead(payload.messageId, user.sub);
    } else {
      await this.messagesService.markDelivered(payload.messageId, user.sub);
    }
  }

  // ── Delta sync on reconnect ───────────────────────────────────────────────
  @UseGuards(WsJwtGuard)
  @SubscribeMessage('sync:request')
  async handleSyncRequest(
    @ConnectedSocket() client: Socket,
    @WsCurrentUser() user: JwtPayload,
    @MessageBody() payload: WsSyncRequestPayload,
  ) {
    const limit = Math.min(payload.limit ?? 50, 50);

    try {
      let result;
      if (payload.roomId) {
        result = await this.messagesService.getRoomMessages({
          roomId: payload.roomId,
          requesterId: user.sub,
          limit,
          cursor: undefined,
        });
      } else if (payload.dmConversationId) {
        result = await this.messagesService.getDmMessages({
          dmConversationId: payload.dmConversationId,
          requesterId: user.sub,
          limit,
          cursor: undefined,
        });
      } else {
        throw new WsException('roomId or dmConversationId required');
      }

      // Send in batches of 50
      client.emit('sync:batch', {
        messages: result.items,
        hasMore: result.hasMore,
      });
      client.emit('sync:complete', {
        roomId: payload.roomId,
        dmConversationId: payload.dmConversationId,
      });
    } catch (err: any) {
      throw new WsException(err.message);
    }
  }

  // ── Domain event listeners → broadcast to Socket.io rooms ─────────────────

  @OnEvent('message.created')
  handleMessageCreated(event: MessageCreatedEvent) {
    const { message } = event;
    const room = message.roomId ?? message.dmConversationId;
    if (room) {
      this.server.to(room).emit('message:new', message);
    }
  }

  @OnEvent('message.edited')
  handleMessageEdited(event: MessageEditedEvent) {
    const { message } = event;
    const room = message.roomId ?? message.dmConversationId;
    if (room) {
      this.server.to(room).emit('message:edited', message);
    }
  }

  @OnEvent('message.deleted')
  handleMessageDeleted(event: MessageDeletedEvent) {
    const room = event.roomId ?? event.dmConversationId;
    if (room) {
      this.server
        .to(room)
        .emit('message:deleted', { messageId: event.messageId });
    }
  }

  @OnEvent('message.reaction.added')
  handleReactionAdded(event: ReactionAddedEvent) {
    const room = event.roomId ?? event.dmConversationId;
    if (room) {
      this.server.to(room).emit('message:reaction', {
        messageId: event.messageId,
        userId: event.userId,
        emoji: event.emoji,
        action: 'added',
      });
    }
  }

  @OnEvent('message.reaction.removed')
  handleReactionRemoved(event: ReactionRemovedEvent) {
    const room = event.roomId ?? event.dmConversationId;
    if (room) {
      this.server.to(room).emit('message:reaction', {
        messageId: event.messageId,
        userId: event.userId,
        emoji: event.emoji,
        action: 'removed',
      });
    }
  }

  @OnEvent('message.pinned')
  handleMessagePinned(event: MessagePinnedEvent) {
    this.server.to(event.roomId).emit('message:pinned', {
      roomId: event.roomId,
      messageId: event.messageId,
      pinnedBy: event.pinnedBy,
    });
  }

  @OnEvent('message.unpinned')
  handleMessageUnpinned(event: MessageUnpinnedEvent) {
    this.server.to(event.roomId).emit('message:unpinned', {
      roomId: event.roomId,
      messageId: event.messageId,
    });
  }
}
