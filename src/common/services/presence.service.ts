import { Injectable } from '@nestjs/common';
import { RedisService } from './redis.service';

// Key schema:
//   presence:user:{userId}       → TTL 45s, value = "1"  (set on heartbeat)
//   presence:room:{roomId}:users → Redis Set of online userIds (maintained by WS gateway)

const USER_PRESENCE_KEY = (userId: string) => `presence:user:${userId}`;
const ROOM_PRESENCE_KEY = (roomId: string) => `presence:room:${roomId}:users`;
const TYPING_KEY = (roomId: string, userId: string) => `typing:room:${roomId}:user:${userId}`;
const DM_TYPING_KEY = (dmId: string, userId: string) => `typing:dm:${dmId}:user:${userId}`;

const USER_PRESENCE_TTL = 45; // seconds — client sends heartbeat every 30s
const TYPING_TTL = 5; // seconds — client sends typing event every 3s

@Injectable()
export class PresenceService {
  constructor(private readonly redis: RedisService) {}

  // ── User online / offline ─────────────────────────────────────────────────

  async setOnline(userId: string): Promise<void> {
    await this.redis.set(USER_PRESENCE_KEY(userId), '1', USER_PRESENCE_TTL);
  }

  async setOffline(userId: string): Promise<void> {
    await this.redis.del(USER_PRESENCE_KEY(userId));
  }

  async isOnline(userId: string): Promise<boolean> {
    return this.redis.exists(USER_PRESENCE_KEY(userId));
  }

  async heartbeat(userId: string): Promise<void> {
    // Refresh TTL without a full set — keeps presence alive
    await this.redis.expire(USER_PRESENCE_KEY(userId), USER_PRESENCE_TTL);
  }

  async getOnlineStatuses(userIds: string[]): Promise<Record<string, boolean>> {
    if (userIds.length === 0) return {};
    const results = await Promise.all(userIds.map((id) => this.isOnline(id)));
    return Object.fromEntries(userIds.map((id, i) => [id, results[i]]));
  }

  // ── Room presence (online member count) ──────────────────────────────────

  async joinRoom(roomId: string, userId: string): Promise<void> {
    await this.redis.sadd(ROOM_PRESENCE_KEY(roomId), userId);
    // Room set TTL is handled by the WS gateway on disconnect
  }

  async leaveRoom(roomId: string, userId: string): Promise<void> {
    await this.redis.srem(ROOM_PRESENCE_KEY(roomId), userId);
  }

  async getRoomOnlineCount(roomId: string): Promise<number> {
    const members = await this.redis.smembers(ROOM_PRESENCE_KEY(roomId));
    return members.length;
  }

  async getRoomOnlineMembers(roomId: string): Promise<string[]> {
    return this.redis.smembers(ROOM_PRESENCE_KEY(roomId));
  }

  // ── Typing indicators ─────────────────────────────────────────────────────

  async setTypingInRoom(roomId: string, userId: string): Promise<void> {
    await this.redis.set(TYPING_KEY(roomId, userId), '1', TYPING_TTL);
  }

  async clearTypingInRoom(roomId: string, userId: string): Promise<void> {
    await this.redis.del(TYPING_KEY(roomId, userId));
  }

  async setTypingInDm(dmId: string, userId: string): Promise<void> {
    await this.redis.set(DM_TYPING_KEY(dmId, userId), '1', TYPING_TTL);
  }

  async clearTypingInDm(dmId: string, userId: string): Promise<void> {
    await this.redis.del(DM_TYPING_KEY(dmId, userId));
  }
}
