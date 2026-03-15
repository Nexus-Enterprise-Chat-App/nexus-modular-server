/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  RoomsRepository,
  RoomWithModerators,
} from '../repositories/rooms.repository';
import {
  AssignModeratorDto,
  ListMembersDto,
  ListRoomsDto,
  RoomDto,
  RoomMemberDto,
  SlowModeDto,
} from '../dto/rooms.dto';
import { PresenceService } from '@src/common/services/presence.service';
import { CursorPaginationResult } from '@src/common/dto';
import { JwtPayload } from '@src/modules/iam/interfaces/jwt-payload.interface';
import { UserRole } from 'generated/prisma/client/enums';

@Injectable()
export class RoomsService {
  constructor(
    private readonly roomsRepo: RoomsRepository,
    private readonly presence: PresenceService,
  ) {}

  // ── List rooms ────────────────────────────────────────────────────────────
  async listRooms(dto: ListRoomsDto): Promise<CursorPaginationResult<RoomDto>> {
    const result = await this.roomsRepo.findAll({
      q: dto.q,
      category: dto.category,
      tags: dto.tags,
      limit: dto.limit ?? 20,
      cursor: dto.cursor,
    });

    const enriched = await Promise.all(result.items.map((r) => this.toDto(r)));
    return { ...result, items: enriched };
  }

  // ── Get single room ───────────────────────────────────────────────────────
  async getRoom(slugOrId: string): Promise<RoomDto> {
    const room = await this.roomsRepo.findBySlugOrId(slugOrId);
    if (!room) throw new NotFoundException('Room not found');
    return this.toDto(room);
  }

  // ── List members ──────────────────────────────────────────────────────────
  async listMembers(
    roomId: string,
    dto: ListMembersDto,
  ): Promise<CursorPaginationResult<RoomMemberDto>> {
    await this.requireRoomExists(roomId);

    const result = await this.roomsRepo.findMembers(
      roomId,
      dto.limit ?? 20,
      dto.cursor,
    );
    const moderatorIds = new Set(
      result.items
        .flatMap((u) => u.roomModerations)
        .map((m) => (m.roomId === roomId ? 'yes' : null))
        .filter(Boolean),
    );

    const onlineStatuses = await this.presence.getOnlineStatuses(
      result.items.map((u) => u.id),
    );

    const members: RoomMemberDto[] = result.items.map((u) => ({
      id: u.id,
      handle: u.handle,
      name: u.name,
      avatarUrl: u.avatarUrl,
      isOnline: onlineStatuses[u.id] ?? false,
      isModerator: u.roomModerations.some((m) => m.roomId === roomId),
    }));

    return { ...result, items: members };
  }

  // ── Assign moderator ──────────────────────────────────────────────────────
  async assignModerator(
    roomId: string,
    dto: AssignModeratorDto,
    actor: JwtPayload,
  ): Promise<void> {
    await this.requireRoomExists(roomId);
    this.requireAdminOrMod(actor);
    await this.roomsRepo.assignModerator(roomId, dto.userId, actor.sub);
  }

  // ── Remove moderator ──────────────────────────────────────────────────────
  async removeModerator(
    roomId: string,
    userId: string,
    actor: JwtPayload,
  ): Promise<void> {
    await this.requireRoomExists(roomId);
    this.requireAdminOrMod(actor);
    await this.roomsRepo.removeModerator(roomId, userId);
  }

  // ── Slow mode ─────────────────────────────────────────────────────────────
  async setSlowMode(
    roomId: string,
    dto: SlowModeDto,
    actor: JwtPayload,
  ): Promise<RoomDto> {
    await this.requireRoomExists(roomId);
    await this.requireModeratorOrAdmin(roomId, actor);
    const updated = await this.roomsRepo.setSlowMode(
      roomId,
      dto.seconds ?? null,
    );
    return this.toDto(updated);
  }

  // ── Slow-mode enforcement (called by MessagesModule) ──────────────────────
  async isSlowModeViolation(roomId: string, userId: string): Promise<boolean> {
    const room = await this.roomsRepo.findBySlugOrId(roomId);
    if (!room?.slowModeSeconds) return false;

    // Implementation: check Redis for last message time
    // Key: slowmode:{roomId}:{userId} — set by MessagesModule on each send
    // Resolved in Phase 3 when MessagesModule is built
    return false;
  }

  // ── Private helpers ───────────────────────────────────────────────────────
  private async toDto(room: RoomWithModerators): Promise<RoomDto> {
    const onlineCount = await this.presence.getRoomOnlineCount(room.id);
    return {
      id: room.id,
      name: room.name,
      slug: room.slug,
      description: room.description,
      avatarUrl: room.avatarUrl,
      category: room.category,
      tags: room.tags,
      status: room.status,
      slowModeSeconds: room.slowModeSeconds,
      onlineCount,
      createdAt: room.createdAt,
    };
  }

  private async requireRoomExists(roomId: string): Promise<RoomWithModerators> {
    const room = await this.roomsRepo.findBySlugOrId(roomId);
    if (!room) throw new NotFoundException('Room not found');
    return room;
  }

  private requireAdminOrMod(actor: JwtPayload): void {
    if (actor.role !== UserRole.ADMIN && actor.role !== UserRole.MODERATOR) {
      throw new ForbiddenException('Moderator or Admin role required');
    }
  }

  private async requireModeratorOrAdmin(
    roomId: string,
    actor: JwtPayload,
  ): Promise<void> {
    if (actor.role === UserRole.ADMIN) return;
    const isMod = await this.roomsRepo.isModerator(roomId, actor.sub);
    if (!isMod)
      throw new ForbiddenException('You are not a moderator of this room');
  }
}
