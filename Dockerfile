# ── Stage 1: Builder ────────────────────────────────────────────
FROM node:20-alpine AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy manifests first (layer cache optimisation)
COPY package.json pnpm-lock.yaml ./
COPY prisma ./prisma/

# Install ALL deps (including devDeps for build)
RUN pnpm install --frozen-lockfile

# Generate Prisma client
RUN pnpm prisma:generate

# Copy source
COPY . .

# Build
RUN pnpm build

# ── Stage 2: Production deps only ───────────────────────────────
FROM node:20-alpine AS deps

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY prisma ./prisma/

RUN pnpm install --frozen-lockfile --prod

RUN pnpm prisma:generate

# ── Stage 3: Runtime ────────────────────────────────────────────
FROM node:20-alpine AS runtime

# Security: non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nestjs -u 1001

# Install ffmpeg for media processing
RUN apk add --no-cache ffmpeg

WORKDIR /app

# Copy production deps
COPY --from=deps --chown=nestjs:nodejs /app/node_modules ./node_modules
COPY --from=deps --chown=nestjs:nodejs /app/prisma ./prisma

# Copy compiled output
COPY --from=builder --chown=nestjs:nodejs /app/dist ./dist
COPY --from=builder --chown=nestjs:nodejs /app/package.json ./

USER nestjs

EXPOSE 3000

# Graceful shutdown support
STOPSIGNAL SIGTERM

CMD ["node", "dist/main"]
