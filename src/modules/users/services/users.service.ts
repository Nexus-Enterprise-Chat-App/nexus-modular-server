import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersRepository, PublicUser } from '../repositories/users.repository';
import { UpdateProfileDto, UserProfileDto, SearchUsersDto } from '../dto/users.dto';
import { PresenceService } from 'common/services/presence.service';
import { CursorPaginationResult } from 'common/dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepo: UsersRepository,
    private readonly presence: PresenceService,
  ) {}

  // ── Get own profile ───────────────────────────────────────────────────────
  async getMe(userId: string): Promise<UserProfileDto> {
    const user = await this.usersRepo.findById(userId);
    if (!user) throw new NotFoundException('User not found');
    return this.enrich(user, userId);
  }

  // ── Update own profile ────────────────────────────────────────────────────
  async updateMe(userId: string, dto: UpdateProfileDto): Promise<UserProfileDto> {
    const updated = await this.usersRepo.updateProfile(userId, dto);
    return this.enrich(updated, userId);
  }

  // ── Get any user's public profile ─────────────────────────────────────────
  async getProfile(idOrHandle: string, requesterId: string): Promise<UserProfileDto> {
    const user = await this.usersRepo.findByIdOrHandle(idOrHandle);
    if (!user) throw new NotFoundException('User not found');
    return this.enrich(user, requesterId);
  }

  // ── Search users ──────────────────────────────────────────────────────────
  async search(
    dto: SearchUsersDto,
    requesterId: string,
  ): Promise<CursorPaginationResult<UserProfileDto>> {
    const limit = dto.limit ?? 20;
    const result = await this.usersRepo.search(dto.q, limit, dto.cursor, requesterId);

    const enriched = await Promise.all(result.items.map((u) => this.enrich(u, requesterId)));

    return { ...result, items: enriched };
  }

  // ── Update avatar URL (called by MediaModule after upload) ────────────────
  async updateAvatar(userId: string, avatarUrl: string): Promise<UserProfileDto> {
    const updated = await this.usersRepo.updateProfile(userId, { avatarUrl });
    return this.enrich(updated, userId);
  }

  // ── Private helpers ───────────────────────────────────────────────────────
  private async enrich(user: PublicUser, requesterId: string): Promise<UserProfileDto> {
    const [isOnline, isBlockedByMe] = await Promise.all([
      this.presence.isOnline(user.id),
      requesterId !== user.id
        ? this.usersRepo.isBlocked(requesterId, user.id)
        : Promise.resolve(false),
    ]);

    return {
      id: user.id,
      handle: user.handle,
      name: user.name,
      avatarUrl: user.avatarUrl,
      bio: user.bio,
      role: user.role,
      createdAt: user.createdAt,
      lastSeenAt: isOnline ? new Date() : user.lastSeenAt,
      isOnline,
      isBlockedByMe,
    };
  }
}
