import { Injectable } from '@nestjs/common';
import {
  CursorPaginationResult,
  decodeCursor,
  encodeCursor,
} from '@src/common/dto';
import { PrismaService } from '@src/common/services/prisma.service';
import { Prisma, RoomStatus } from 'generated/prisma/client/client';

export const ROOM_SELECT = {
  id: true,
  name: true,
  slug: true,
  description: true,
  avatarUrl: true,
  category: true,
  tags: true,
  status: true,
  slowModeSeconds: true,
  createdBy: true,
  createdAt: true,
  moderators: {
    select: { userId: true },
  },
} satisfies Prisma.RoomSelect;

export type RoomWithModerators = Prisma.RoomGetPayload<{
  select: typeof ROOM_SELECT;
}>;

const MEMBER_SELECT = {
  id: true,
  handle: true,
  name: true,
  avatarUrl: true,
  roomModerations: {
    select: { roomId: true },
  },
} satisfies Prisma.UserSelect;

@Injectable()
export class RoomsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(opts: {
    q?: string;
    category?: string;
    tags?: string[];
    limit: number;
    cursor?: string;
  }): Promise<CursorPaginationResult<RoomWithModerators>> {
    const { q, category, tags, limit, cursor } = opts;
    const take = limit + 1;

    const where: Prisma.RoomWhereInput = {
      status: RoomStatus.ACTIVE,
      ...(q && { name: { contains: q, mode: 'insensitive' } }),
      ...(category && { category }),
      ...(tags && tags.length > 0 && { tags: { hasSome: tags } }),
    };

    const cursorFilter: Prisma.RoomWhereInput | undefined = cursor
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

    const items = await this.prisma.room.findMany({
      where: cursorFilter ? { AND: [where, cursorFilter] } : where,
      select: ROOM_SELECT,
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

  async findBySlugOrId(slugOrId: string): Promise<RoomWithModerators | null> {
    const isUuid = /^[0-9a-f-]{36}$/i.test(slugOrId);
    return this.prisma.room.findUnique({
      where: isUuid ? { id: slugOrId } : { slug: slugOrId },
      select: ROOM_SELECT,
    });
  }

  async findMembers(
    roomId: string,
    limit: number,
    cursor?: string,
  ): Promise<
    CursorPaginationResult<
      Prisma.UserGetPayload<{ select: typeof MEMBER_SELECT }>
    >
  > {
    // "Members" of a public room = all users who have sent a message or are moderators.
    // For Phase 2 (pre-messages), we return moderators + recent active users from device sessions.
    // This will be updated in Phase 3 when the messages table exists.
    const take = limit + 1;

    const cursorFilter = cursor
      ? (() => {
          const { id } = decodeCursor<{ id: string }>(cursor);
          return { id: { lt: id } } as Prisma.UserWhereInput;
        })()
      : undefined;

    const items = await this.prisma.user.findMany({
      where: {
        isActive: true,
        OR: [{ roomModerations: { some: { roomId } } }],
        ...(cursorFilter ?? {}),
      },
      select: MEMBER_SELECT,
      orderBy: { id: 'desc' },
      take,
    });

    const hasMore = items.length > limit;
    if (hasMore) items.pop();

    const nextCursor =
      hasMore && items.length > 0
        ? encodeCursor({ id: items[items.length - 1].id })
        : null;

    return { items, nextCursor, hasMore };
  }

  // ── Moderation ─────────────────────────────────────────────────────────────

  async isModerator(roomId: string, userId: string): Promise<boolean> {
    const record = await this.prisma.roomModerator.findUnique({
      where: { roomId_userId: { roomId, userId } },
    });
    return !!record;
  }

  async assignModerator(roomId: string, userId: string, assignedBy: string) {
    return this.prisma.roomModerator.create({
      data: { roomId, userId, assignedBy },
    });
  }

  async removeModerator(roomId: string, userId: string) {
    return this.prisma.roomModerator.deleteMany({ where: { roomId, userId } });
  }

  async setSlowMode(roomId: string, seconds: number | null) {
    return this.prisma.room.update({
      where: { id: roomId },
      data: { slowModeSeconds: seconds },
      select: ROOM_SELECT,
    });
  }
}
