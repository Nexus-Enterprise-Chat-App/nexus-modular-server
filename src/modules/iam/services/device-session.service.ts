import { Injectable } from '@nestjs/common';
import { PrismaService } from '@common/services/prisma.service';
import * as bcrypt from 'bcrypt';
import { DevicePlatform } from '../../../../generated/prisma';

interface UpsertSessionParams {
  userId: string;
  deviceId: string;
  platform: DevicePlatform;
  refreshToken: string;
  pushToken?: string;
  deviceName?: string;
  deviceModel?: string;
  ipAddress?: string;
}

@Injectable()
export class DeviceSessionService {
  constructor(private readonly prisma: PrismaService) {}

  async upsert(params: UpsertSessionParams) {
    const refreshTokenHash = await bcrypt.hash(params.refreshToken, 10);

    return this.prisma.deviceSession.upsert({
      where: { userId_deviceId: { userId: params.userId, deviceId: params.deviceId } },
      create: {
        userId: params.userId,
        deviceId: params.deviceId,
        platform: params.platform,
        refreshTokenHash,
        pushToken: params.pushToken,
        deviceName: params.deviceName,
        deviceModel: params.deviceModel,
        ipAddress: params.ipAddress,
        lastSeenAt: new Date(),
      },
      update: {
        refreshTokenHash,
        pushToken: params.pushToken,
        lastSeenAt: new Date(),
        ipAddress: params.ipAddress,
      },
    });
  }

  async findByUserAndDevice(userId: string, deviceId: string) {
    return this.prisma.deviceSession.findUnique({
      where: { userId_deviceId: { userId, deviceId } },
    });
  }

  async verifyRefreshToken(
    userId: string,
    deviceId: string,
    refreshToken: string,
  ): Promise<boolean> {
    const session = await this.findByUserAndDevice(userId, deviceId);
    if (!session) return false;
    return bcrypt.compare(refreshToken, session.refreshTokenHash);
  }

  async clearRefreshToken(userId: string, deviceId: string): Promise<void> {
    await this.prisma.deviceSession.updateMany({
      where: { userId, deviceId },
      data: { refreshTokenHash: '', pushToken: null },
    });
  }

  async revokeSession(userId: string, deviceId: string): Promise<void> {
    await this.prisma.deviceSession.deleteMany({ where: { userId, deviceId } });
  }

  async revokeAllSessions(userId: string): Promise<void> {
    await this.prisma.deviceSession.deleteMany({ where: { userId } });
  }

  async listSessions(userId: string) {
    return this.prisma.deviceSession.findMany({
      where: { userId },
      select: {
        id: true,
        deviceId: true,
        platform: true,
        deviceName: true,
        deviceModel: true,
        lastSeenAt: true,
        createdAt: true,
      },
      orderBy: { lastSeenAt: 'desc' },
    });
  }
}
