import { Inject, Injectable, OnModuleDestroy, Logger } from '@nestjs/common';
import { AppConfigService } from '@src/config/app.config';
import Redis from 'ioredis';

export const REDIS_CLIENT = Symbol('REDIS_CLIENT');

export const InjectRedis = () => Inject(REDIS_CLIENT);

export function createRedisClient(config: AppConfigService): Redis {
  const { host, port, password } = config.redis;
  const client = new Redis({
    host,
    port,
    password: password || undefined,
    retryStrategy: (times) => Math.min(times * 100, 3000),
    maxRetriesPerRequest: 3,
    enableReadyCheck: true,
    lazyConnect: false,
  });

  client.on('connect', () => new Logger('Redis').log('Connected'));
  client.on('error', (err) =>
    new Logger('Redis').error(`Connection error: ${err.message}`),
  );
  client.on('reconnecting', () => new Logger('Redis').warn('Reconnecting...'));

  return client;
}

@Injectable()
export class RedisService implements OnModuleDestroy {
  constructor(@InjectRedis() private readonly client: Redis) {}

  async onModuleDestroy() {
    await this.client.quit();
  }

  // ── Key-value ────────────────────────────────────────────────────────────
  async set(key: string, value: string, ttlSeconds?: number): Promise<void> {
    if (ttlSeconds) {
      await this.client.setex(key, ttlSeconds, value);
    } else {
      await this.client.set(key, value);
    }
  }

  async get(key: string): Promise<string | null> {
    return this.client.get(key);
  }

  async del(...keys: string[]): Promise<void> {
    await this.client.del(...keys);
  }

  async exists(key: string): Promise<boolean> {
    const count = await this.client.exists(key);
    return count > 0;
  }

  async expire(key: string, ttlSeconds: number): Promise<void> {
    await this.client.expire(key, ttlSeconds);
  }

  async ttl(key: string): Promise<number> {
    return this.client.ttl(key);
  }

  // ── JSON helpers ─────────────────────────────────────────────────────────
  async setJson<T>(key: string, value: T, ttlSeconds?: number): Promise<void> {
    await this.set(key, JSON.stringify(value), ttlSeconds);
  }

  async getJson<T>(key: string): Promise<T | null> {
    const raw = await this.get(key);
    return raw ? (JSON.parse(raw) as T) : null;
  }

  // ── Set operations ───────────────────────────────────────────────────────
  async sadd(key: string, ...members: string[]): Promise<void> {
    await this.client.sadd(key, ...members);
  }

  async srem(key: string, ...members: string[]): Promise<void> {
    await this.client.srem(key, ...members);
  }

  async smembers(key: string): Promise<string[]> {
    return this.client.smembers(key);
  }

  async sismember(key: string, member: string): Promise<boolean> {
    const result = await this.client.sismember(key, member);
    return result === 1;
  }

  // ── Increment ────────────────────────────────────────────────────────────
  async incr(key: string): Promise<number> {
    return this.client.incr(key);
  }

  // ── Raw client access ────────────────────────────────────────────────────
  getClient(): Redis {
    return this.client;
  }
}
