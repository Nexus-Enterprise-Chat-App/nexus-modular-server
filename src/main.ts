import { NestFactory } from '@nestjs/core';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';
import helmet from 'helmet';
import * as compression from 'compression';
import { AppModule } from './app.module';
import { AppConfigService } from '@config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  // ── Logger ──────────────────────────────────────────────────────────────
  app.useLogger(app.get(Logger));

  // ── Config ──────────────────────────────────────────────────────────────
  const config = app.get(AppConfigService);

  // ── Security ─────────────────────────────────────────────────────────────
  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: 'cross-origin' },
      contentSecurityPolicy: config.isProduction,
    }),
  );
  app.use(compression());

  // ── CORS ─────────────────────────────────────────────────────────────────
  app.enableCors({
    origin: config.corsOrigins,
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-correlation-id'],
    credentials: true,
  });

  // ── API Versioning (URI: /v1/...) ─────────────────────────────────────────
  app.enableVersioning({ type: VersioningType.URI });

  // ── Global Validation Pipe ────────────────────────────────────────────────
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip unknown properties
      forbidNonWhitelisted: true, // Throw on unknown properties
      transform: true, // Auto-transform to DTO class instances
      transformOptions: { enableImplicitConversion: true },
      stopAtFirstError: false, // Collect all validation errors
    }),
  );

  // ── Swagger / OpenAPI ─────────────────────────────────────────────────────
  if (config.swagger.enabled) {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('Nexus API')
      .setDescription(
        'Nexus — Enterprise Real-Time Chat Platform\n\n' +
          '## Authentication\n' +
          'Use `POST /v1/auth/login` to get an access token, then click **Authorize** and paste the token.',
      )
      .setVersion('1.0.0')
      .addBearerAuth(
        { type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'header' },
        'access-token',
      )
      .addServer(`http://localhost:${config.port}`, 'Local development')
      .addTag('IAM — Authentication', 'Registration, login, token management, device sessions')
      .addTag('Users', 'User profiles and relationships')
      .addTag('Rooms', 'Public chat rooms')
      .addTag('Messages', 'Message CRUD, reactions, statuses')
      .addTag('DMs', 'Direct messages')
      .addTag('Media', 'File upload and media management')
      .addTag('Search', 'Full-text search')
      .addTag('Admin', 'Platform administration (ADMIN role required)')
      .addTag('Health', 'Service health checks')
      .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup(config.swagger.path, app, document, {
      swaggerOptions: {
        persistAuthorization: true,
        tagsSorter: 'alpha',
        operationsSorter: 'alpha',
      },
      customSiteTitle: 'Nexus API Docs',
    });

    console.log(`\n📖 Swagger docs: http://localhost:${config.port}/${config.swagger.path}\n`);
  }

  // ── Graceful Shutdown ─────────────────────────────────────────────────────
  app.enableShutdownHooks();

  process.on('SIGTERM', async () => {
    console.log('SIGTERM received — shutting down gracefully...');
    await app.close();
    process.exit(0);
  });

  // ── Start ─────────────────────────────────────────────────────────────────
  await app.listen(config.port, '0.0.0.0');
  console.log(`\n🚀 Nexus server running on http://localhost:${config.port}`);
  console.log(`📋 Environment: ${config.nodeEnv}\n`);
}

bootstrap().catch((err) => {
  console.error('Fatal bootstrap error:', err);
  process.exit(1);
});
