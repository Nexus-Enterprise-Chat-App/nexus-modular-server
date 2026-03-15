import { Injectable } from '@nestjs/common';
import {
  CursorPaginationResult,
  decodeCursor,
  encodeCursor,
} from '@src/common/dto';
import { PrismaService } from '@src/common/services/prisma.service';
import {
  MessageStatus,
  MessageType,
  Prisma,
} from 'generated/prisma/client/client';

// Full message shape including relations needed for MessageDto
const MESSAGE_INCLUDE = {
  sender: { select: { id: true, handle: true, name: true, avatarUrl: true } },
  replyTo: {
    select: {
      id: true,
      content: true,
      sender: {
        select: { id: true, handle: true, name: true, avatarUrl: true },
      },
    },
  },
  reactions: { select: { userId: true, emoji: true } },
  statuses: { select: { recipientId: true, status: true } },
} satisfies Prisma.MessageInclude;

export type FullMessage = Prisma.MessageGetPayload<{
  include: typeof MESSAGE_INCLUDE;
}>;

@Injectable()
export class MessagesRepository {
  constructor(private readonly prisma: PrismaService) {}

  // ── Create ─────────────────────────────────────────────────────────────────
  async create(data: {
    type: MessageType;
    content?: string;
    mediaUrl?: string;
    mediaMetadata?: Prisma.InputJsonValue;
    senderId: string;
    roomId?: string;
    dmConversationId?: string;
    replyToId?: string;
    clientTempId?: string;
  }): Promise<FullMessage> {
    return this.prisma.message.create({
      data,
      include: MESSAGE_INCLUDE,
    });
  }

  // ── Find by ID ─────────────────────────────────────────────────────────────
  async findById(id: string): Promise<FullMessage | null> {
    return this.prisma.message.findUnique({
      where: { id },
      include: MESSAGE_INCLUDE,
    });
  }

  // ── Find by clientTempId (deduplication) ───────────────────────────────────
  async findByClientTempId(clientTempId: string): Promise<FullMessage | null> {
    return this.prisma.message.findUnique({
      where: { clientTempId },
      include: MESSAGE_INCLUDE,
    });
  }

  // ── List room messages (cursor-paginated, newest first) ────────────────────
  async listByRoom(
    roomId: string,
    limit: number,
    cursor?: string,
  ): Promise<CursorPaginationResult<FullMessage>> {
    return this.paginateMessages({ roomId, deletedAt: null }, limit, cursor);
  }

  // ── List DM messages ───────────────────────────────────────────────────────
  async listByDm(
    dmConversationId: string,
    limit: number,
    cursor?: string,
  ): Promise<CursorPaginationResult<FullMessage>> {
    return this.paginateMessages(
      { dmConversationId, deletedAt: null },
      limit,
      cursor,
    );
  }

  // ── Edit ───────────────────────────────────────────────────────────────────
  async edit(messageId: string, content: string): Promise<FullMessage> {
    return this.prisma.message.update({
      where: { id: messageId },
      data: { content, isEdited: true, editedAt: new Date() },
      include: MESSAGE_INCLUDE,
    });
  }

  // ── Soft delete ────────────────────────────────────────────────────────────
  async softDelete(messageId: string): Promise<FullMessage> {
    return this.prisma.message.update({
      where: { id: messageId },
      data: { deletedAt: new Date(), content: null, mediaUrl: null },
      include: MESSAGE_INCLUDE,
    });
  }

  // ── Reactions ──────────────────────────────────────────────────────────────
  async addReaction(messageId: string, userId: string, emoji: string) {
    return this.prisma.reaction.upsert({
      where: { messageId_userId_emoji: { messageId, userId, emoji } },
      create: { messageId, userId, emoji },
      update: {},
    });
  }

  async removeReaction(messageId: string, userId: string, emoji: string) {
    return this.prisma.reaction.deleteMany({
      where: { messageId, userId, emoji },
    });
  }

  async getReactions(messageId: string) {
    return this.prisma.reaction.findMany({ where: { messageId } });
  }

  // ── Message statuses ───────────────────────────────────────────────────────
  async upsertStatus(
    messageId: string,
    recipientId: string,
    status: MessageStatus,
  ) {
    return this.prisma.messageStatus_.upsert({
      where: { messageId_recipientId: { messageId, recipientId } },
      create: { messageId, recipientId, status },
      update: { status },
    });
  }

  async markRoomMessagesDelivered(roomId: string, recipientId: string) {
    // Mark all SENT messages in room as DELIVERED for this recipient
    const messages = await this.prisma.message.findMany({
      where: { roomId, deletedAt: null, senderId: { not: recipientId } },
      select: { id: true },
    });

    await Promise.all(
      messages.map((m) =>
        this.prisma.messageStatus_.upsert({
          where: { messageId_recipientId: { messageId: m.id, recipientId } },
          create: {
            messageId: m.id,
            recipientId,
            status: MessageStatus.DELIVERED,
          },
          update: { status: MessageStatus.DELIVERED },
        }),
      ),
    );
  }

  // ── Pinned messages ────────────────────────────────────────────────────────
  async pin(roomId: string, messageId: string, pinnedBy: string) {
    return this.prisma.pinnedMessage.upsert({
      where: { roomId_messageId: { roomId, messageId } },
      create: { roomId, messageId, pinnedBy },
      update: { pinnedBy, pinnedAt: new Date() },
    });
  }

  async unpin(roomId: string, messageId: string) {
    return this.prisma.pinnedMessage.deleteMany({
      where: { roomId, messageId },
    });
  }

  async getPinnedMessages(roomId: string): Promise<FullMessage[]> {
    const pins = await this.prisma.pinnedMessage.findMany({
      where: { roomId },
      include: {
        message: { include: MESSAGE_INCLUDE },
      },
      orderBy: { pinnedAt: 'desc' },
    });
    return pins.map((p) => p.message);
  }

  // ── Private cursor pagination ──────────────────────────────────────────────
  private async paginateMessages(
    where: Prisma.MessageWhereInput,
    limit: number,
    cursor?: string,
  ): Promise<CursorPaginationResult<FullMessage>> {
    const take = limit + 1;

    const cursorFilter: Prisma.MessageWhereInput | undefined = cursor
      ? (() => {
          const { id, createdAt } = decodeCursor<{
            id: string;
            createdAt: string;
          }>(cursor);
          return {
            OR: [
              { createdAt: { lt: new Date(createdAt) } },
              { createdAt: new Date(createdAt), id: { lt: id } },
            ],
          };
        })()
      : undefined;

    const items = await this.prisma.message.findMany({
      where: cursorFilter ? { AND: [where, cursorFilter] } : where,
      include: MESSAGE_INCLUDE,
      orderBy: [{ createdAt: 'desc' }, { id: 'desc' }],
      take,
    });

    const hasMore = items.length > limit;
    if (hasMore) items.pop();

    const nextCursor =
      hasMore && items.length > 0
        ? encodeCursor({
            id: items[items.length - 1].id,
            createdAt: items[items.length - 1].createdAt.toISOString(),
          })
        : null;

    return { items, nextCursor, hasMore };
  }
}
