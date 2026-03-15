import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bullmq';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { TokenBlacklistService } from './token-blacklist.service';
import { DeviceSessionService } from './device-session.service';
import {
  JwtPayload,
  RefreshTokenPayload,
  ResetTokenPayload,
} from '../interfaces/jwt-payload.interface';
import {
  LoginDto,
  RegisterDto,
  AuthResponseDto,
  AuthUserDto,
  DeviceSessionDto,
} from '../dto/auth.dto';
import { AppConfigService } from '@src/config/app.config';
import { PrismaService } from '@src/common/services/prisma.service';
import { User } from 'generated/prisma/client/client';

export const EMAIL_QUEUE = 'email';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly config: AppConfigService,
    private readonly blacklist: TokenBlacklistService,
    private readonly sessions: DeviceSessionService,
    @InjectQueue(EMAIL_QUEUE) private readonly emailQueue: Queue,
  ) {}

  // ── Register ──────────────────────────────────────────────────────────────
  async register(
    dto: RegisterDto,
    ipAddress?: string,
  ): Promise<AuthResponseDto> {
    const [emailExists, handleExists] = await Promise.all([
      this.prisma.user.findUnique({
        where: { email: dto.email.toLowerCase() },
      }),
      this.prisma.user.findUnique({
        where: { handle: dto.handle.toLowerCase() },
      }),
    ]);

    if (emailExists) throw new ConflictException('Email already in use');
    if (handleExists) throw new ConflictException('Handle already taken');

    const passwordHash = await bcrypt.hash(dto.password, 12);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email.toLowerCase(),
        handle: dto.handle.toLowerCase(),
        name: dto.name,
        passwordHash,
      },
    });

    // Queue welcome email
    await this.emailQueue.add('welcome', {
      userId: user.id,
      email: user.email,
      name: user.name,
    });

    // Use a default web device for register (client provides proper deviceInfo on login)
    const deviceId = uuidv4();
    const { accessToken, refreshToken } = await this.generateTokenPair(
      user,
      deviceId,
    );

    await this.sessions.upsert({
      userId: user.id,
      deviceId,
      platform: 'WEB',
      refreshToken,
      ipAddress,
    });

    return { accessToken, refreshToken, user: this.toAuthUserDto(user) };
  }

  // ── Login ─────────────────────────────────────────────────────────────────
  async login(dto: LoginDto, ipAddress?: string): Promise<AuthResponseDto> {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email.toLowerCase() },
    });

    if (!user || !(await bcrypt.compare(dto.password, user.passwordHash))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!user.isActive) {
      throw new UnauthorizedException(
        'Account is suspended. Please contact support.',
      );
    }

    const { deviceId, platform, pushToken, deviceName, deviceModel } =
      dto.deviceInfo;
    const { accessToken, refreshToken } = await this.generateTokenPair(
      user,
      deviceId,
    );

    await this.sessions.upsert({
      userId: user.id,
      deviceId,
      platform,
      refreshToken,
      pushToken,
      deviceName,
      deviceModel,
      ipAddress,
    });

    // Update lastSeenAt
    await this.prisma.user.update({
      where: { id: user.id },
      data: { lastSeenAt: new Date() },
    });

    return { accessToken, refreshToken, user: this.toAuthUserDto(user) };
  }

  // ── Refresh ───────────────────────────────────────────────────────────────
  async refresh(
    refreshToken: string,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    let payload: RefreshTokenPayload;
    try {
      payload = this.jwtService.verify<RefreshTokenPayload>(refreshToken, {
        secret: this.config.jwt.refreshSecret,
      });
    } catch {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }

    const valid = await this.sessions.verifyRefreshToken(
      payload.sub,
      payload.deviceId,
      refreshToken,
    );
    if (!valid)
      throw new UnauthorizedException('Refresh token revoked or invalid');

    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
    });
    if (!user || !user.isActive)
      throw new UnauthorizedException('User not found or suspended');

    // Rotate: issue new pair, invalidate old
    const newPair = await this.generateTokenPair(user, payload.deviceId);

    await this.sessions.upsert({
      userId: user.id,
      deviceId: payload.deviceId,
      platform: 'WEB', // will be overwritten by existing record's platform via upsert
      refreshToken: newPair.refreshToken,
    });

    return newPair;
  }

  // ── Logout ────────────────────────────────────────────────────────────────
  async logout(
    userId: string,
    deviceId: string,
    accessTokenJti: string,
    accessTokenExp: number,
  ): Promise<void> {
    const remainingTtl = Math.max(
      0,
      accessTokenExp - Math.floor(Date.now() / 1000),
    );
    await Promise.all([
      this.blacklist.blacklist(accessTokenJti, remainingTtl),
      this.sessions.clearRefreshToken(userId, deviceId),
    ]);
  }

  // ── Forgot Password ───────────────────────────────────────────────────────
  async forgotPassword(email: string): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });
    // Always return success to prevent email enumeration
    if (!user) return;

    const jti = uuidv4();
    const resetToken = this.jwtService.sign(
      { sub: user.id, email: user.email, jti } satisfies ResetTokenPayload,
      {
        secret: this.config.jwt.resetSecret,
        expiresIn: this.config.jwt.resetExpiry,
      },
    );

    await this.emailQueue.add('password-reset', {
      userId: user.id,
      email: user.email,
      name: user.name,
      resetToken,
    });
  }

  // ── Reset Password ────────────────────────────────────────────────────────
  async resetPassword(token: string, newPassword: string): Promise<void> {
    let payload: ResetTokenPayload;
    try {
      payload = this.jwtService.verify<ResetTokenPayload>(token, {
        secret: this.config.jwt.resetSecret,
      });
    } catch {
      throw new BadRequestException('Invalid or expired reset token');
    }

    const passwordHash = await bcrypt.hash(newPassword, 12);

    await this.prisma.user.update({
      where: { id: payload.sub },
      data: { passwordHash },
    });

    // Revoke all device sessions on password reset
    await this.sessions.revokeAllSessions(payload.sub);
  }

  // ── List Sessions ─────────────────────────────────────────────────────────
  async listSessions(userId: string): Promise<DeviceSessionDto[]> {
    return this.sessions.listSessions(userId) as Promise<DeviceSessionDto[]>;
  }

  // ── Revoke Session ────────────────────────────────────────────────────────
  async revokeSession(userId: string, deviceId: string): Promise<void> {
    await this.sessions.revokeSession(userId, deviceId);
  }

  // ── Credential Validation (used by LocalStrategy) ─────────────────────────
  async validateCredentials(
    email: string,
    password: string,
  ): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });
    if (!user) return null;
    const valid = await bcrypt.compare(password, user.passwordHash);
    return valid ? user : null;
  }

  // ── Private helpers ───────────────────────────────────────────────────────
  private async generateTokenPair(user: User, deviceId: string) {
    const jti = uuidv4();

    const accessPayload: JwtPayload = {
      sub: user.id,
      email: user.email,
      handle: user.handle,
      name: user.name,
      role: user.role,
      permissions: user.permissions,
      deviceId,
      jti,
    };

    const refreshPayload: RefreshTokenPayload = {
      sub: user.id,
      deviceId,
      jti: uuidv4(),
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(accessPayload, {
        secret: this.config.jwt.accessSecret,
        expiresIn: this.config.jwt.accessExpiry,
      }),
      this.jwtService.signAsync(refreshPayload, {
        secret: this.config.jwt.refreshSecret,
        expiresIn: this.config.jwt.refreshExpiry,
      }),
    ]);

    return { accessToken, refreshToken };
  }

  private toAuthUserDto(user: User): AuthUserDto {
    return {
      id: user.id,
      email: user.email,
      handle: user.handle,
      name: user.name,
      avatarUrl: user.avatarUrl,
      role: user.role,
      permissions: user.permissions,
    };
  }
}
