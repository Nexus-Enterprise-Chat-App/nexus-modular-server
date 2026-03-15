import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';
import { PrismaService } from './services/prisma.service';
import {
  RedisService,
  REDIS_CLIENT,
  createRedisClient,
} from './services/redis.service';
import { HealthController } from './health/health.controller';
import { RedisHealthIndicator } from './health/redis.health';
import { PresenceService } from './services/presence.service';
import { AppConfigService } from '@src/config/app.config';
import { validateConfig } from '@src/config/config.schema';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateConfig,
      envFilePath: ['.env', '.env.local'],
    }),
    TerminusModule,
  ],
  controllers: [HealthController],
  providers: [
    AppConfigService,
    PrismaService,
    {
      provide: REDIS_CLIENT,
      useFactory: (config: AppConfigService) => createRedisClient(config),
      inject: [AppConfigService],
    },
    RedisService,
    RedisHealthIndicator,
    PresenceService,
  ],
  exports: [
    AppConfigService,
    PrismaService,
    RedisService,
    PresenceService,
    REDIS_CLIENT,
  ],
})
export class CommonModule {}
