import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from './config.schema';

@Injectable()
export class AppConfigService {
  constructor(private readonly config: ConfigService<AppConfig, true>) {}

  get database() {
    return {
      url: this.config.get('DATABASE_URL', { infer: true }),
    };
  }

  get nodeEnv() {
    return this.config.get('NODE_ENV', { infer: true });
  }
  get port() {
    return this.config.get('APP_PORT', { infer: true });
  }
  get appName() {
    return this.config.get('APP_NAME', { infer: true });
  }
  get appUrl() {
    return this.config.get('APP_URL', { infer: true });
  }
  get isProduction() {
    return this.nodeEnv === 'production';
  }
  get isDevelopment() {
    return this.nodeEnv === 'development';
  }

  get corsOrigins(): string[] {
    return this.config
      .get('CORS_ORIGINS', { infer: true })
      .split(',')
      .map((s) => s.trim());
  }

  get redis() {
    return {
      host: this.config.get('REDIS_HOST', { infer: true }),
      port: this.config.get('REDIS_PORT', { infer: true }),
      password: this.config.get('REDIS_PASSWORD', { infer: true }),
    };
  }

  get jwt() {
    return {
      accessSecret: this.config.get('JWT_ACCESS_SECRET', { infer: true }),
      accessExpiry: this.config.get('JWT_ACCESS_EXPIRY', { infer: true }),
      refreshSecret: this.config.get('JWT_REFRESH_SECRET', { infer: true }),
      refreshExpiry: this.config.get('JWT_REFRESH_EXPIRY', { infer: true }),
      resetSecret: this.config.get('JWT_RESET_SECRET', { infer: true }),
      resetExpiry: this.config.get('JWT_RESET_EXPIRY', { infer: true }),
    };
  }

  get storage() {
    return {
      provider: this.config.get('STORAGE_PROVIDER', { infer: true }),
      firebase: {
        projectId: this.config.get('FIREBASE_PROJECT_ID', { infer: true }),
        storageBucket: this.config.get('FIREBASE_STORAGE_BUCKET', { infer: true }),
        serviceAccountBase64: this.config.get('FIREBASE_SERVICE_ACCOUNT_BASE64', { infer: true }),
      },
      r2: {
        accountId: this.config.get('R2_ACCOUNT_ID', { infer: true }),
        accessKeyId: this.config.get('R2_ACCESS_KEY_ID', { infer: true }),
        secretAccessKey: this.config.get('R2_SECRET_ACCESS_KEY', { infer: true }),
        bucketName: this.config.get('R2_BUCKET_NAME', { infer: true }),
        publicUrl: this.config.get('R2_PUBLIC_URL', { infer: true }),
      },
    };
  }

  get smtp() {
    return {
      host: this.config.get('SMTP_HOST', { infer: true }),
      port: this.config.get('SMTP_PORT', { infer: true }),
      secure: this.config.get('SMTP_SECURE', { infer: true }),
      user: this.config.get('SMTP_USER', { infer: true }),
      pass: this.config.get('SMTP_PASS', { infer: true }),
      fromName: this.config.get('SMTP_FROM_NAME', { infer: true }),
      fromEmail: this.config.get('SMTP_FROM_EMAIL', { infer: true }),
    };
  }

  get throttle() {
    return {
      ttl: this.config.get('THROTTLE_TTL', { infer: true }),
      limit: this.config.get('THROTTLE_LIMIT', { infer: true }),
    };
  }

  get swagger() {
    return {
      enabled: this.config.get('SWAGGER_ENABLED', { infer: true }),
      path: this.config.get('SWAGGER_PATH', { infer: true }),
    };
  }

  get mediaLimits() {
    return {
      imageMb: this.config.get('MAX_IMAGE_SIZE_MB', { infer: true }),
      videoMb: this.config.get('MAX_VIDEO_SIZE_MB', { infer: true }),
      voiceMb: this.config.get('MAX_VOICE_SIZE_MB', { infer: true }),
    };
  }

  get adminIpAllowlist(): string[] {
    return this.config
      .get('ADMIN_IP_ALLOWLIST', { infer: true })
      .split(',')
      .map((s) => s.trim());
  }
}
