/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { NestFactory } from '@nestjs/core';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import helmet from 'helmet';
import * as compression from 'compression';
import { AppModule } from './app.module';
import { RedisService } from './common/services/redis.service';
import { AppConfigService } from './config/app.config';
import { ServerOptions } from 'socket.io';

class RedisIoAdapter extends IoAdapter {
  private adapterConstructor: ReturnType<typeof createAdapter>;

  async connectToRedis(redisService: RedisService): Promise<void> {
    const pubClient = redisService.getClient();
    const subClient = pubClient.duplicate();
    await new Promise<void>((resolve, reject) => {
      subClient.once('ready', resolve);
      subClient.once('error', reject);
    });
    this.adapterConstructor = createAdapter(pubClient, subClient);
  }

  createIOServer(port: number, options?: ServerOptions): any {
    const server = super.createIOServer(port, options) as any;
    server.adapter(this.adapterConstructor);
    return server;
  }

  bindMessageHandlers(client: any, handlers: any[], transform: any): any {
    return super.bindMessageHandlers(client, handlers, transform);
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  app.useLogger(app.get(Logger));

  const config = app.get(AppConfigService);
  const redisService = app.get(RedisService);

  // ── Redis Socket.io adapter ───────────────────────────────────
  const redisIoAdapter = new RedisIoAdapter(app);
  await redisIoAdapter.connectToRedis(redisService);
  app.useWebSocketAdapter(redisIoAdapter);

  // ── Security ──────────────────────────────────────────────────
  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: 'cross-origin' },
      contentSecurityPolicy: config.isProduction,
    }),
  );
  app.use(compression());

  // ── CORS ──────────────────────────────────────────────────────
  app.enableCors({
    origin: config.corsOrigins,
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-correlation-id'],
    credentials: true,
  });

  // ── Versioning ────────────────────────────────────────────────
  app.enableVersioning({ type: VersioningType.URI });

  // ── Validation ────────────────────────────────────────────────
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      stopAtFirstError: false,
    }),
  );

  // ── Swagger ───────────────────────────────────────────────────
  if (config.swagger.enabled) {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('Nexus API')
      .setDescription('Nexus — Enterprise Real-Time Chat Platform')
      .setVersion('1.0.0')
      .addBearerAuth(
        { type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'header' },
        'access-token',
      )
      .addServer(`http://localhost:${config.port}`, 'Local development')
      .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup(config.swagger.path, app, document, {
      swaggerOptions: { persistAuthorization: true },
      customSiteTitle: 'Nexus API Docs',
    });
  }

  // ── Shutdown ──────────────────────────────────────────────────
  app.enableShutdownHooks();

  await app.listen(config.port, '0.0.0.0');
  console.log(`\n🚀 Nexus running on http://localhost:${config.port}`);
  console.log(
    `📖 Swagger at http://localhost:${config.port}/${config.swagger.path}\n`,
  );
}

bootstrap().catch((err) => {
  console.error('Fatal bootstrap error:', err);
  process.exit(1);
});
