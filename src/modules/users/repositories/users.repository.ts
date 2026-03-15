import { Injectable } from '@nestjs/common';
import {
  CursorPaginationResult,
  decodeCursor,
  encodeCursor,
} from '@src/common/dto';
import { PrismaService } from '@src/common/services/prisma.service';
import { Prisma } from 'generated/prisma/client/client';

// The subset of User fields safe to return in API responses
export const PUBLIC_USER_SELECT = {
  id: true,
  handle: true,
  name: true,
  avatarUrl: true,
  bio: true,
  role: true,
  createdAt: true,
  lastSeenAt: true,
} satisfies Prisma.UserSelect;

export type PublicUser = Prisma.UserGetPayload<{
  select: typeof PUBLIC_USER_SELECT;
}>;

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<PublicUser | null> {
    return this.prisma.user.findUnique({
      where: { id },
      select: PUBLIC_USER_SELECT,
    });
  }

  async findByHandle(handle: string): Promise<PublicUser | null> {
    return this.prisma.user.findUnique({
      where: { handle: handle.toLowerCase() },
      select: PUBLIC_USER_SELECT,
    });
  }

  async findByIdOrHandle(idOrHandle: string): Promise<PublicUser | null> {
    // UUID format check (simple heuristic)
    const isUuid =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        idOrHandle,
      );
    return isUuid ? this.findById(idOrHandle) : this.findByHandle(idOrHandle);
  }

  async updateProfile(
    userId: string,
    data: { name?: string; bio?: string; avatarUrl?: string },
  ): Promise<PublicUser> {
    return this.prisma.user.update({
      where: { id: userId },
      data,
      select: PUBLIC_USER_SELECT,
    });
  }

  async search(
    query: string | undefined,
    limit: number,
    cursor: string | undefined,
    excludeUserId: string,
  ): Promise<CursorPaginationResult<PublicUser>> {
    const take = limit + 1;

    const where: Prisma.UserWhereInput = {
      isActive: true,
      id: { not: excludeUserId },
      ...(query && {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { handle: { contains: query, mode: 'insensitive' } },
        ],
      }),
    };

    const cursorClause: Prisma.UserWhereInput | undefined = cursor
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

    const items = await this.prisma.user.findMany({
      where: cursorClause ? { AND: [where, cursorClause] } : where,
      select: PUBLIC_USER_SELECT,
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

  // ── Block / Unblock ────────────────────────────────────────────────────────

  async isBlocked(blockerId: string, blockedId: string): Promise<boolean> {
    // We'll use a raw query until the BlockedUser model is added in migration 0004
    const result = await this.prisma.$queryRaw<[{ exists: boolean }]>`
      SELECT EXISTS (
        SELECT 1 FROM "blocked_users"
        WHERE "blockerId" = ${blockerId}::uuid
          AND "blockedId" = ${blockedId}::uuid
      ) AS exists
    `;
    return result[0]?.exists ?? false;
  }
}
