import { Injectable } from '@nestjs/common';
import { RedisService } from '@src/common/services/redis.service';

const BLACKLIST_PREFIX = 'blacklist:token:';

@Injectable()
export class TokenBlacklistService {
  constructor(private readonly redis: RedisService) {}

  async blacklist(jti: string, ttlSeconds: number): Promise<void> {
    await this.redis.set(`${BLACKLIST_PREFIX}${jti}`, '1', ttlSeconds);
  }

  async isBlacklisted(jti: string): Promise<boolean> {
    return this.redis.exists(`${BLACKLIST_PREFIX}${jti}`);
  }
}
