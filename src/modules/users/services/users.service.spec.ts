import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersRepository } from '../repositories/users.repository';
import { UserRole } from '../../../../generated/prisma';

const mockUser = {
  id: 'user-uuid-1',
  handle: 'alice',
  name: 'Alice Johnson',
  avatarUrl: null,
  bio: null,
  role: UserRole.USER,
  createdAt: new Date('2026-01-01'),
  lastSeenAt: null,
};

const mockUsersRepo = {
  findById: jest.fn(),
  findByIdOrHandle: jest.fn(),
  updateProfile: jest.fn(),
  search: jest.fn(),
  isBlocked: jest.fn(),
};

const mockPresence = {
  isOnline: jest.fn(),
};

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: UsersRepository, useValue: mockUsersRepo },
        { provide: PresenceService, useValue: mockPresence },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    jest.clearAllMocks();
  });

  describe('getMe', () => {
    it('returns enriched profile for existing user', async () => {
      mockUsersRepo.findById.mockResolvedValue(mockUser);
      mockPresence.isOnline.mockResolvedValue(true);
      mockUsersRepo.isBlocked.mockResolvedValue(false);

      const result = await service.getMe('user-uuid-1');

      expect(result.handle).toBe('alice');
      expect(result.isOnline).toBe(true);
      expect(result.isBlockedByMe).toBe(false);
    });

    it('throws NotFoundException when user does not exist', async () => {
      mockUsersRepo.findById.mockResolvedValue(null);

      await expect(service.getMe('non-existent')).rejects.toThrow(NotFoundException);
    });
  });

  describe('updateMe', () => {
    it('updates and returns the enriched profile', async () => {
      const updated = { ...mockUser, name: 'Alice Smith' };
      mockUsersRepo.updateProfile.mockResolvedValue(updated);
      mockPresence.isOnline.mockResolvedValue(false);

      const result = await service.updateMe('user-uuid-1', { name: 'Alice Smith' });

      expect(result.name).toBe('Alice Smith');
      expect(mockUsersRepo.updateProfile).toHaveBeenCalledWith('user-uuid-1', {
        name: 'Alice Smith',
      });
    });
  });

  describe('getProfile', () => {
    it('returns public profile and marks isBlockedByMe correctly', async () => {
      mockUsersRepo.findByIdOrHandle.mockResolvedValue(mockUser);
      mockPresence.isOnline.mockResolvedValue(false);
      mockUsersRepo.isBlocked.mockResolvedValue(true);

      const result = await service.getProfile('alice', 'requester-uuid');

      expect(result.isBlockedByMe).toBe(true);
      expect(mockUsersRepo.isBlocked).toHaveBeenCalledWith('requester-uuid', 'user-uuid-1');
    });

    it('throws NotFoundException for unknown handle', async () => {
      mockUsersRepo.findByIdOrHandle.mockResolvedValue(null);

      await expect(service.getProfile('ghost', 'requester-uuid')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('search', () => {
    it('returns paginated enriched results', async () => {
      mockUsersRepo.search.mockResolvedValue({
        items: [mockUser],
        nextCursor: null,
        hasMore: false,
      });
      mockPresence.isOnline.mockResolvedValue(false);
      mockUsersRepo.isBlocked.mockResolvedValue(false);

      const result = await service.search({ q: 'alice', limit: 20 }, 'requester-uuid');

      expect(result.items).toHaveLength(1);
      expect(result.hasMore).toBe(false);
    });
  });
});
