import { Test, TestingModule } from '@nestjs/testing';
import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { JwtPayload } from '../../iam/interfaces/jwt-payload.interface';
import { RoomsService } from './rooms.service';
import { PresenceService } from '../../../common/services/presence.service';
import { RoomsRepository } from '../repositories/rooms.repository';
import { RoomStatus, UserRole } from '../../../../generated/prisma';

const mockRoom = {
  id: 'room-uuid-1',
  name: 'Tech Talk',
  slug: 'tech-talk',
  description: 'All things tech',
  avatarUrl: null,
  category: 'Technology',
  tags: ['tech'],
  status: RoomStatus.ACTIVE,
  slowModeSeconds: null,
  createdBy: 'admin-uuid',
  createdAt: new Date('2026-01-01'),
  moderators: [],
};

const mockAdmin: JwtPayload = {
  sub: 'admin-uuid',
  email: 'admin@nexus.dev',
  handle: 'admin',
  name: 'Admin',
  role: UserRole.ADMIN,
  permissions: [],
  deviceId: 'device-1',
  jti: 'jti-1',
};

const mockUser: JwtPayload = {
  sub: 'user-uuid',
  email: 'user@nexus.dev',
  handle: 'user',
  name: 'User',
  role: UserRole.USER,
  permissions: [],
  deviceId: 'device-2',
  jti: 'jti-2',
};

const mockRoomsRepo = {
  findAll: jest.fn(),
  findBySlugOrId: jest.fn(),
  findMembers: jest.fn(),
  isModerator: jest.fn(),
  assignModerator: jest.fn(),
  removeModerator: jest.fn(),
  setSlowMode: jest.fn(),
};

const mockPresence = {
  getRoomOnlineCount: jest.fn(),
  getOnlineStatuses: jest.fn(),
};

describe('RoomsService', () => {
  let service: RoomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RoomsService,
        { provide: RoomsRepository, useValue: mockRoomsRepo },
        { provide: PresenceService, useValue: mockPresence },
      ],
    }).compile();

    service = module.get<RoomsService>(RoomsService);
    jest.clearAllMocks();
  });

  describe('getRoom', () => {
    it('returns a room DTO with online count', async () => {
      mockRoomsRepo.findBySlugOrId.mockResolvedValue(mockRoom);
      mockPresence.getRoomOnlineCount.mockResolvedValue(42);

      const result = await service.getRoom('tech-talk');

      expect(result.slug).toBe('tech-talk');
      expect(result.onlineCount).toBe(42);
    });

    it('throws NotFoundException for unknown slug', async () => {
      mockRoomsRepo.findBySlugOrId.mockResolvedValue(null);
      await expect(service.getRoom('ghost-room')).rejects.toThrow(NotFoundException);
    });
  });

  describe('setSlowMode', () => {
    it('allows admin to set slow mode', async () => {
      mockRoomsRepo.findBySlugOrId.mockResolvedValue(mockRoom);
      mockRoomsRepo.setSlowMode.mockResolvedValue({ ...mockRoom, slowModeSeconds: 10 });
      mockPresence.getRoomOnlineCount.mockResolvedValue(0);

      const result = await service.setSlowMode('room-uuid-1', { seconds: 10 }, mockAdmin);
      expect(result.slowModeSeconds).toBe(10);
    });

    it('throws ForbiddenException for regular user', async () => {
      mockRoomsRepo.findBySlugOrId.mockResolvedValue(mockRoom);
      mockRoomsRepo.isModerator.mockResolvedValue(false);

      await expect(
        service.setSlowMode('room-uuid-1', { seconds: 10 }, mockUser),
      ).rejects.toThrow(ForbiddenException);
    });
  });

  describe('assignModerator', () => {
    it('throws ForbiddenException if actor is a regular user', async () => {
      mockRoomsRepo.findBySlugOrId.mockResolvedValue(mockRoom);

      await expect(
        service.assignModerator('room-uuid-1', { userId: 'some-user' }, mockUser),
      ).rejects.toThrow(ForbiddenException);
    });

    it('succeeds for admin', async () => {
      mockRoomsRepo.findBySlugOrId.mockResolvedValue(mockRoom);
      mockRoomsRepo.assignModerator.mockResolvedValue({});

      await expect(
        service.assignModerator('room-uuid-1', { userId: 'some-user' }, mockAdmin),
      ).resolves.not.toThrow();
    });
  });
});
