import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { BullModule } from '@nestjs/bull';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { LoggerModule } from 'nestjs-pino';
import { CommonModule } from './common/common.module';
import { IamModule } from './modules/iam/iam.module';
import { UsersModule } from './modules/users/users.module';
import { RoomsModule } from './modules/rooms/rooms.module';
import { MessagesModule } from './modules/messages/messages.module';
import { AppConfigService } from '@config/app.config';
import { GlobalHttpExceptionFilter, PrismaExceptionFilter } from './common/filters';
import {
  ResponseTransformInterceptor,
  LoggingInterceptor,
  TimeoutInterceptor,
} from './common/interceptors';
import { JwtAuthGuard, RolesGuard, PermissionsGuard } from './common/guards';

@Module({
  imports: [
    // ── Logger ──────────────────────────────────────────────────
    LoggerModule.forRootAsync({
      inject: [AppConfigService],
      useFactory: (config: AppConfigService) => ({
        pinoHttp: {
          level: config.isDevelopment ? 'debug' : 'info',
          transport: config.isDevelopment
            ? { target: 'pino-pretty', options: { colorize: true, singleLine: true } }
            : undefined,
          redact: ['req.headers.authorization', 'req.body.password'],
          autoLogging: false,
        },
      }),
    }),

    // ── Core ─────────────────────────────────────────────────────
    CommonModule,
    EventEmitterModule.forRoot({ wildcard: true, delimiter: '.', global: true }),

    // ── Rate limiting ────────────────────────────────────────────
    ThrottlerModule.forRootAsync({
      inject: [AppConfigService],
      useFactory: (config: AppConfigService) => ({
        throttlers: [{ ttl: config.throttle.ttl, limit: config.throttle.limit }],
      }),
    }),

    // ── BullMQ ───────────────────────────────────────────────────
    BullModule.forRootAsync({
      inject: [AppConfigService],
      useFactory: (config: AppConfigService) => ({
        connection: {
          host: config.redis.host,
          port: config.redis.port,
          password: config.redis.password,
        },
        defaultJobOptions: {
          attempts: 3,
          backoff: { type: 'exponential', delay: 2000 },
          removeOnComplete: 100,
          removeOnFail: 500,
        },
      }),
    }),

    // ── Feature Modules ──────────────────────────────────────────
    IamModule,
    UsersModule,
    RoomsModule,
    MessagesModule,
  ],

  providers: [
    { provide: APP_FILTER, useClass: PrismaExceptionFilter },
    { provide: APP_FILTER, useClass: GlobalHttpExceptionFilter },
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
    { provide: APP_INTERCEPTOR, useClass: TimeoutInterceptor },
    { provide: APP_INTERCEPTOR, useClass: ResponseTransformInterceptor },
    { provide: APP_GUARD, useClass: ThrottlerGuard },
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
    { provide: APP_GUARD, useClass: PermissionsGuard },
  ],
})
export class AppModule {}
