/* eslint-disable prettier/prettier */
import { z } from 'zod';

export const configSchema = z.object({
  // App
  NODE_ENV: z.enum(['development', 'staging', 'production']).default('development'),
  APP_PORT: z.coerce.number().default(3000),
  APP_NAME: z.string().default('Nexus'),
  APP_URL: z.string().url().default('http://localhost:3000'),
  CORS_ORIGINS: z.string().default('http://localhost:5173'),

  // Database
  DATABASE_URL: z.string().min(1, 'DATABASE_URL is required'),

  // Redis
  REDIS_HOST: z.string().default('localhost'),
  REDIS_PORT: z.coerce.number().default(6379),
  REDIS_PASSWORD: z.string().optional(),

  // JWT
  JWT_ACCESS_SECRET: z.string().min(32, 'JWT_ACCESS_SECRET must be at least 32 chars'),
  JWT_ACCESS_EXPIRY: z.string().default('15m'),
  JWT_REFRESH_SECRET: z.string().min(32, 'JWT_REFRESH_SECRET must be at least 32 chars'),
  JWT_REFRESH_EXPIRY: z.string().default('30d'),
  JWT_RESET_SECRET: z.string().min(32, 'JWT_RESET_SECRET must be at least 32 chars'),
  JWT_RESET_EXPIRY: z.string().default('1h'),

  // Storage
  STORAGE_PROVIDER: z.enum(['firebase', 'r2']).default('firebase'),
  FIREBASE_PROJECT_ID: z.string().optional(),
  FIREBASE_STORAGE_BUCKET: z.string().optional(),
  FIREBASE_SERVICE_ACCOUNT_BASE64: z.string().optional(),
  R2_ACCOUNT_ID: z.string().optional(),
  R2_ACCESS_KEY_ID: z.string().optional(),
  R2_SECRET_ACCESS_KEY: z.string().optional(),
  R2_BUCKET_NAME: z.string().optional(),
  R2_PUBLIC_URL: z.string().optional(),

  // Email
  SMTP_HOST: z.string().default('localhost'),
  SMTP_PORT: z.coerce.number().default(1025),
  SMTP_SECURE: z.coerce.boolean().default(false),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  SMTP_FROM_NAME: z.string().default('Nexus'),
  SMTP_FROM_EMAIL: z.string().email().default('noreply@nexus.app'),

  // Rate Limiting
  THROTTLE_TTL: z.coerce.number().default(60000),
  THROTTLE_LIMIT: z.coerce.number().default(100),

  // Feature flags
  SWAGGER_ENABLED: z.coerce.boolean().default(true),
  SWAGGER_PATH: z.string().default('docs'),
  BULL_BOARD_ENABLED: z.coerce.boolean().default(false),

  // Media
  MAX_IMAGE_SIZE_MB: z.coerce.number().default(10),
  MAX_VIDEO_SIZE_MB: z.coerce.number().default(100),
  MAX_VOICE_SIZE_MB: z.coerce.number().default(10),

  // Admin
  ADMIN_IP_ALLOWLIST: z.string().default('127.0.0.1'),
});

export type AppConfig = z.infer<typeof configSchema>;

export function validateConfig(config: Record<string, unknown>): AppConfig {
  const result = configSchema.safeParse(config);
  if (!result.success) {
    const errors = result.error.errors.map((e) => `  ${e.path.join('.')}: ${e.message}`).join('\n');
    throw new Error(`\n❌ Invalid environment configuration:\n${errors}\n`);
  }
  return result.data;
}
