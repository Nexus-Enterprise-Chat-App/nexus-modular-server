import { Injectable } from '@nestjs/common';
import { HealthIndicator, HealthIndicatorResult, HealthCheckError } from '@nestjs/terminus';
import { InjectRedis } from '../services/redis.service';
import Redis from 'ioredis';

@Injectable()
export class RedisHealthIndicator extends HealthIndicator {
  constructor(@InjectRedis() private readonly redis: Redis) {
    super();
  }

  async isHealthy(key: string): Promise<HealthIndicatorResult> {
    try {
      const pong = await this.redis.ping();
      const isHealthy = pong === 'PONG';
      const result = this.getStatus(key, isHealthy);
      if (isHealthy) return result;
      throw new HealthCheckError('Redis check failed', result);
    } catch (err) {
      const result = this.getStatus(key, false, { message: (err as Error).message });
      throw new HealthCheckError('Redis check failed', result);
    }
  }
}
