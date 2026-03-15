# nexus-modular-server

Backend for **Nexus** — an enterprise-grade, real-time chat platform built with NestJS.

## Stack

| Layer | Technology |
|---|---|
| Framework | NestJS v10 (TypeScript) |
| Database | PostgreSQL 16 + Prisma ORM |
| Cache / Pub-Sub | Redis 7 + ioredis |
| Real-time | Socket.io + Redis adapter |
| Job Queue | BullMQ |
| Auth | Custom JWT (access + refresh rotation) |
| Storage | Firebase Storage (default) / Cloudflare R2 |
| Email | Nodemailer + BullMQ |
| Logger | nestjs-pino (structured JSON) |
| Docs | Swagger/OpenAPI + AsyncAPI |

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9+
- Docker + Docker Compose

### Local development

```bash
# 1. Clone and install
pnpm install

# 2. Copy environment
cp .env.example .env
# Edit .env with your values

# 3. Start dependencies (Postgres + Redis)
docker compose up -d

# Optionally start dev tools (pgAdmin, Redis Commander, Mailhog)
docker compose --profile tools up -d

# 4. Run database migrations and seed
pnpm prisma:migrate:dev
pnpm prisma:seed

# 5. Start dev server (hot reload)
pnpm start:dev
```

Server runs on `http://localhost:3000`
Swagger docs at `http://localhost:3000/docs`
Mailhog UI at `http://localhost:8025`

### Seed credentials (password: `Password1!`)

| Role | Email |
|---|---|
| Admin | admin@nexus.dev |
| User | alice@nexus.dev |
| User | bob@nexus.dev |

## Project Structure

```
src/
  common/          # Shared: guards, interceptors, pipes, filters, decorators, DTOs
  config/          # Zod-validated environment config + typed AppConfigService
  modules/
    iam/           # Identity & Access Management (auth, sessions, tokens)
    users/         # User profiles and relationships     [Phase 2]
    rooms/         # Room management                     [Phase 2]
    messages/      # Messages, reactions, statuses (CQRS)[Phase 3]
    media/         # Upload + FFmpeg processing           [Phase 4]
    notifications/ # FCM push + in-app                   [Phase 4]
    search/        # Full-text search                    [Phase 5]
    admin/         # Admin dashboard APIs                [Phase 5]
prisma/
  schema.prisma    # Full database schema
  seed.ts          # Dev seed data
  init.sql         # PostgreSQL extensions + partition instructions
docs/              # openapi.yaml, asyncapi.yml, postman collection (generated)
```

## Available Scripts

```bash
pnpm start:dev          # Development server with hot reload
pnpm build              # Production build
pnpm test               # Unit tests
pnpm test:cov           # Unit tests with coverage report
pnpm test:e2e           # End-to-end tests
pnpm lint               # ESLint
pnpm prisma:studio      # Open Prisma database browser
pnpm prisma:migrate:dev # Create a new migration
pnpm prisma:seed        # Seed the database
```

## Architecture Notes

- **Modular monolith**: all modules deployed together but with strict domain boundaries
- **Global guards** applied in order: `ThrottlerGuard → JwtAuthGuard → RolesGuard → PermissionsGuard`
- **Global interceptors**: `LoggingInterceptor → TimeoutInterceptor → ResponseTransformInterceptor`  
- **All responses** wrapped in `{ success, data, meta }` envelope by `ResponseTransformInterceptor`
- **@Public()** decorator exempts any endpoint from JWT authentication
- **IStorageProvider** abstraction: set `STORAGE_PROVIDER=firebase` or `STORAGE_PROVIDER=r2` in `.env`

## Environment Variables

See `.env.example` for all required and optional variables with descriptions.
