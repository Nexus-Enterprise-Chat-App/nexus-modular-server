/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { MessagesRepository, FullMessage } from '../repositories/messages.repository';
import { RoomsRepository } from '@modules/rooms/repositories/rooms.repository';
import { RedisService } from '@common/services/redis.service';
import {
  SendMessageCommand,
  EditMessageCommand,
  DeleteMessageCommand,
  AddReactionCommand,
  RemoveReactionCommand,
  PinMessageCommand,
  UnpinMessageCommand,
} from '../commands';
import { GetRoomMessagesQuery, GetDmMessagesQuery, GetPinnedMessagesQuery } from '../queries';
import {
  MessageCreatedEvent,
  MessageDeletedEvent,
  MessageEditedEvent,
  MessagePinnedEvent,
  MessageUnpinnedEvent,
  ReactionAddedEvent,
  ReactionRemovedEvent,
} from '../events';
import { MessageDto, ReactionSummaryDto } from '../dto/messages.dto';
import { CursorPaginationResult } from '@common/dto';
import { MessageStatus, UserRole } from '../../../../generated/prisma';

const SLOW_MODE_KEY = (roomId: string, userId: string) => `slowmode:room:${roomId}:user:${userId}`;

const EDIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

@Injectable()
export class MessagesService {
  constructor(
    private readonly messagesRepo: MessagesRepository,
    private readonly roomsRepo: RoomsRepository,
    private readonly redis: RedisService,
    private readonly events: EventEmitter2,
  ) {}

  // ── Send Message ──────────────────────────────────────────────────────────
  async send(cmd: SendMessageCommand): Promise<MessageDto> {
    // Deduplication — idempotent if client retries
    if (cmd.clientTempId) {
      const existing = await this.messagesRepo.findByClientTempId(cmd.clientTempId);
      if (existing) return this.toDto(existing, cmd.senderId);
    }

    // Slow-mode enforcement for room messages
    if (cmd.roomId) {
      await this.enforceSlowMode(cmd.roomId, cmd.senderId);
    }

    // Content validation — must have content or mediaUrl
    if (!cmd.content?.trim() && !cmd.mediaUrl) {
      throw new BadRequestException('Message must have content or media');
    }

    const message = await this.messagesRepo.create({
      type: cmd.type,
      content: cmd.content?.trim(),
      mediaUrl: cmd.mediaUrl,
      senderId: cmd.senderId,
      roomId: cmd.roomId,
      dmConversationId: cmd.dmConversationId,
      replyToId: cmd.replyToId,
      clientTempId: cmd.clientTempId,
    });

    // Update slow-mode key
    if (cmd.roomId) {
      const room = await this.roomsRepo.findBySlugOrId(cmd.roomId);
      if (room?.slowModeSeconds) {
        await this.redis.set(SLOW_MODE_KEY(cmd.roomId, cmd.senderId), '1', room.slowModeSeconds);
      }
    }

    const dto = this.toDto(message, cmd.senderId);
    this.events.emit('message.created', new MessageCreatedEvent(dto));
    return dto;
  }

  // ── Edit Message ──────────────────────────────────────────────────────────
  async edit(cmd: EditMessageCommand): Promise<MessageDto> {
    const message = await this.messagesRepo.findById(cmd.messageId);
    if (!message) throw new NotFoundException('Message not found');
    if (message.deletedAt) throw new BadRequestException('Cannot edit a deleted message');
    if (message.senderId !== cmd.requesterId) {
      throw new ForbiddenException('You can only edit your own messages');
    }

    const ageMs = Date.now() - message.createdAt.getTime();
    if (ageMs > EDIT_WINDOW_MS) {
      throw new BadRequestException('Edit window expired (15 minutes)');
    }

    const updated = await this.messagesRepo.edit(cmd.messageId, cmd.content);
    const dto = this.toDto(updated, cmd.requesterId);
    this.events.emit('message.edited', new MessageEditedEvent(dto));
    return dto;
  }

  // ── Delete Message ────────────────────────────────────────────────────────
  async delete(cmd: DeleteMessageCommand): Promise<void> {
    const message = await this.messagesRepo.findById(cmd.messageId);
    if (!message) throw new NotFoundException('Message not found');
    if (message.deletedAt) return; // Already deleted — idempotent

    const isOwner = message.senderId === cmd.requesterId;
    const isMod = cmd.requesterRole === UserRole.MODERATOR || cmd.requesterRole === UserRole.ADMIN;

    if (!isOwner && !isMod) {
      throw new ForbiddenException('You cannot delete this message');
    }

    await this.messagesRepo.softDelete(cmd.messageId);
    this.events.emit(
      'message.deleted',
      new MessageDeletedEvent(cmd.messageId, message.roomId, message.dmConversationId),
    );
  }

  // ── Get Room Messages ─────────────────────────────────────────────────────
  async getRoomMessages(query: GetRoomMessagesQuery): Promise<CursorPaginationResult<MessageDto>> {
    const result = await this.messagesRepo.listByRoom(query.roomId, query.limit, query.cursor);
    return {
      ...result,
      items: result.items.map((m) => this.toDto(m, query.requesterId)),
    };
  }

  // ── Get DM Messages ───────────────────────────────────────────────────────
  async getDmMessages(query: GetDmMessagesQuery): Promise<CursorPaginationResult<MessageDto>> {
    const result = await this.messagesRepo.listByDm(
      query.dmConversationId,
      query.limit,
      query.cursor,
    );
    return {
      ...result,
      items: result.items.map((m) => this.toDto(m, query.requesterId)),
    };
  }

  // ── Get Pinned Messages ───────────────────────────────────────────────────
  async getPinnedMessages(query: GetPinnedMessagesQuery): Promise<MessageDto[]> {
    const messages = await this.messagesRepo.getPinnedMessages(query.roomId);
    return messages.map((m) => this.toDto(m, query.requesterId));
  }

  // ── Add Reaction ──────────────────────────────────────────────────────────
  async addReaction(cmd: AddReactionCommand): Promise<void> {
    const message = await this.messagesRepo.findById(cmd.messageId);
    if (!message) throw new NotFoundException('Message not found');
    if (message.deletedAt) throw new BadRequestException('Cannot react to a deleted message');

    await this.messagesRepo.addReaction(cmd.messageId, cmd.userId, cmd.emoji);
    this.events.emit(
      'message.reaction.added',
      new ReactionAddedEvent(
        cmd.messageId,
        cmd.userId,
        cmd.emoji,
        message.roomId,
        message.dmConversationId,
      ),
    );
  }

  // ── Remove Reaction ───────────────────────────────────────────────────────
  async removeReaction(cmd: RemoveReactionCommand): Promise<void> {
    const message = await this.messagesRepo.findById(cmd.messageId);
    if (!message) throw new NotFoundException('Message not found');

    await this.messagesRepo.removeReaction(cmd.messageId, cmd.userId, cmd.emoji);
    this.events.emit(
      'message.reaction.removed',
      new ReactionRemovedEvent(
        cmd.messageId,
        cmd.userId,
        cmd.emoji,
        message.roomId,
        message.dmConversationId,
      ),
    );
  }

  // ── Pin Message ───────────────────────────────────────────────────────────
  async pinMessage(cmd: PinMessageCommand): Promise<void> {
    if (
      cmd.requesterRole !== UserRole.ADMIN &&
      cmd.requesterRole !== UserRole.MODERATOR &&
      !cmd.isRoomModerator
    ) {
      throw new ForbiddenException('Only moderators can pin messages');
    }

    const message = await this.messagesRepo.findById(cmd.messageId);
    if (!message || message.roomId !== cmd.roomId) {
      throw new NotFoundException('Message not found in this room');
    }

    await this.messagesRepo.pin(cmd.roomId, cmd.messageId, cmd.pinnedBy);
    this.events.emit(
      'message.pinned',
      new MessagePinnedEvent(cmd.roomId, cmd.messageId, cmd.pinnedBy),
    );
  }

  // ── Unpin Message ─────────────────────────────────────────────────────────
  async unpinMessage(cmd: UnpinMessageCommand): Promise<void> {
    if (
      cmd.requesterRole !== UserRole.ADMIN &&
      cmd.requesterRole !== UserRole.MODERATOR &&
      !cmd.isRoomModerator
    ) {
      throw new ForbiddenException('Only moderators can unpin messages');
    }

    await this.messagesRepo.unpin(cmd.roomId, cmd.messageId);
    this.events.emit('message.unpinned', new MessageUnpinnedEvent(cmd.roomId, cmd.messageId));
  }

  // ── Mark Delivered ────────────────────────────────────────────────────────
  async markDelivered(messageId: string, recipientId: string): Promise<void> {
    await this.messagesRepo.upsertStatus(messageId, recipientId, MessageStatus.DELIVERED);
  }

  async markRead(messageId: string, recipientId: string): Promise<void> {
    await this.messagesRepo.upsertStatus(messageId, recipientId, MessageStatus.READ);
  }

  async markRoomDelivered(roomId: string, userId: string): Promise<void> {
    await this.messagesRepo.markRoomMessagesDelivered(roomId, userId);
  }

  // ── Private: slow-mode enforcement ────────────────────────────────────────
  private async enforceSlowMode(roomId: string, userId: string): Promise<void> {
    const key = SLOW_MODE_KEY(roomId, userId);
    const active = await this.redis.exists(key);
    if (active) {
      const ttl = await this.redis.ttl(key);
      throw new BadRequestException(
        `Slow mode is active. Please wait ${ttl} second${ttl !== 1 ? 's' : ''} before sending another message.`,
      );
    }
  }

  // ── Private: FullMessage → MessageDto ────────────────────────────────────
  toDto(message: FullMessage, requesterId: string): MessageDto {
    // Aggregate reactions: { emoji → { count, reactedByMe } }
    const reactionMap = new Map<string, { count: number; reactedByMe: boolean }>();
    for (const r of message.reactions) {
      const entry = reactionMap.get(r.emoji) ?? { count: 0, reactedByMe: false };
      entry.count++;
      if (r.userId === requesterId) entry.reactedByMe = true;
      reactionMap.set(r.emoji, entry);
    }

    const reactions: ReactionSummaryDto[] = Array.from(reactionMap.entries()).map(
      ([emoji, data]) => ({ emoji, ...data }),
    );

    // Find this user's delivery/read status for this message
    const myStatus = message.statuses.find((s) => s.recipientId === requesterId)?.status ?? null;

    return {
      id: message.id,
      type: message.type,
      content: message.deletedAt ? null : message.content,
      mediaUrl: message.deletedAt ? null : message.mediaUrl,
      mediaMetadata: message.deletedAt
        ? null
        : (message.mediaMetadata as Record<string, unknown> | null),
      sender: message.sender,
      roomId: message.roomId,
      dmConversationId: message.dmConversationId,
      replyTo: message.replyTo
        ? {
            id: message.replyTo.id,
            content: message.replyTo.content,
            sender: message.replyTo.sender,
          }
        : null,
      isEdited: message.isEdited,
      editedAt: message.editedAt,
      isDeleted: !!message.deletedAt,
      reactions,
      myStatus,
      clientTempId: message.clientTempId,
      createdAt: message.createdAt,
    };
  }
}
