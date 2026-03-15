import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException, ForbiddenException, NotFoundException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { MessagesService } from './messages.service';
import { MessagesRepository } from '../repositories/messages.repository';
import {
  SendMessageCommand,
  EditMessageCommand,
  DeleteMessageCommand,
  AddReactionCommand,
} from '../commands';
import { MessageType, UserRole } from '../../../../generated/prisma';

const mockMessage = {
  id: 'msg-uuid-1',
  type: MessageType.TEXT,
  content: 'Hello world',
  mediaUrl: null,
  mediaMetadata: null,
  senderId: 'user-uuid-1',
  roomId: 'room-uuid-1',
  dmConversationId: null,
  replyToId: null,
  replyTo: null,
  isEdited: false,
  editedAt: null,
  deletedAt: null,
  clientTempId: null,
  createdAt: new Date('2026-01-01T10:00:00Z'),
  updatedAt: new Date('2026-01-01T10:00:00Z'),
  sender: { id: 'user-uuid-1', handle: 'alice', name: 'Alice', avatarUrl: null },
  reactions: [],
  statuses: [],
};

const mockMessagesRepo = {
  create: jest.fn(),
  findById: jest.fn(),
  findByClientTempId: jest.fn(),
  listByRoom: jest.fn(),
  listByDm: jest.fn(),
  edit: jest.fn(),
  softDelete: jest.fn(),
  addReaction: jest.fn(),
  removeReaction: jest.fn(),
  upsertStatus: jest.fn(),
  markRoomMessagesDelivered: jest.fn(),
  pin: jest.fn(),
  unpin: jest.fn(),
  getPinnedMessages: jest.fn(),
};

const mockRoomsRepo = { findBySlugOrId: jest.fn() };
const mockRedis = { exists: jest.fn(), set: jest.fn(), ttl: jest.fn() };
const mockEvents = { emit: jest.fn() };

describe('MessagesService', () => {
  let service: MessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MessagesService,
        { provide: MessagesRepository, useValue: mockMessagesRepo },
        { provide: RoomsRepository, useValue: mockRoomsRepo },
        { provide: RedisService, useValue: mockRedis },
        { provide: EventEmitter2, useValue: mockEvents },
      ],
    }).compile();

    service = module.get<MessagesService>(MessagesService);
    jest.clearAllMocks();
  });

  // ── Send ────────────────────────────────────────────────────────────────

  describe('send', () => {
    it('creates and returns a message DTO', async () => {
      mockRedis.exists.mockResolvedValue(false);
      mockRoomsRepo.findBySlugOrId.mockResolvedValue({ slowModeSeconds: null });
      mockMessagesRepo.findByClientTempId.mockResolvedValue(null);
      mockMessagesRepo.create.mockResolvedValue(mockMessage);

      const cmd = new SendMessageCommand(
        'user-uuid-1',
        MessageType.TEXT,
        'Hello',
        undefined,
        undefined,
        undefined,
        'room-uuid-1',
        undefined,
      );
      const result = await service.send(cmd);

      expect(result.content).toBe('Hello');
      expect(mockEvents.emit).toHaveBeenCalledWith('message.created', expect.any(Object));
    });

    it('returns existing message for duplicate clientTempId', async () => {
      mockMessagesRepo.findByClientTempId.mockResolvedValue(mockMessage);

      const cmd = new SendMessageCommand(
        'user-uuid-1',
        MessageType.TEXT,
        'Hello',
        undefined,
        undefined,
        'temp-id-1',
        'room-uuid-1',
        undefined,
      );
      const result = await service.send(cmd);

      expect(result.id).toBe('msg-uuid-1');
      expect(mockMessagesRepo.create).not.toHaveBeenCalled();
    });

    it('throws BadRequestException if message has no content or media', async () => {
      mockMessagesRepo.findByClientTempId.mockResolvedValue(null);
      mockRedis.exists.mockResolvedValue(false);
      mockRoomsRepo.findBySlugOrId.mockResolvedValue({ slowModeSeconds: null });

      const cmd = new SendMessageCommand(
        'user-uuid-1',
        MessageType.TEXT,
        undefined,
        undefined,
        undefined,
        undefined,
        'room-uuid-1',
        undefined,
      );
      await expect(service.send(cmd)).rejects.toThrow(BadRequestException);
    });

    it('throws BadRequestException if slow mode is active', async () => {
      mockMessagesRepo.findByClientTempId.mockResolvedValue(null);
      mockRedis.exists.mockResolvedValue(true);
      mockRedis.ttl.mockResolvedValue(8);

      const cmd = new SendMessageCommand(
        'user-uuid-1',
        MessageType.TEXT,
        'Hi',
        undefined,
        undefined,
        undefined,
        'room-uuid-1',
        undefined,
      );
      await expect(service.send(cmd)).rejects.toThrow(BadRequestException);
    });
  });

  // ── Edit ────────────────────────────────────────────────────────────────

  describe('edit', () => {
    it('allows owner to edit within window', async () => {
      mockMessagesRepo.findById.mockResolvedValue(mockMessage);
      mockMessagesRepo.edit.mockResolvedValue({
        ...mockMessage,
        content: 'Edited',
        isEdited: true,
      });

      const result = await service.edit(
        new EditMessageCommand('msg-uuid-1', 'user-uuid-1', 'Edited'),
      );
      expect(result.isEdited).toBe(true);
    });

    it('throws ForbiddenException if not the owner', async () => {
      mockMessagesRepo.findById.mockResolvedValue(mockMessage);
      await expect(
        service.edit(new EditMessageCommand('msg-uuid-1', 'other-user', 'Edited')),
      ).rejects.toThrow(ForbiddenException);
    });

    it('throws BadRequestException if edit window expired', async () => {
      const oldMessage = { ...mockMessage, createdAt: new Date('2025-01-01') };
      mockMessagesRepo.findById.mockResolvedValue(oldMessage);
      await expect(
        service.edit(new EditMessageCommand('msg-uuid-1', 'user-uuid-1', 'Edited')),
      ).rejects.toThrow(BadRequestException);
    });
  });

  // ── Delete ───────────────────────────────────────────────────────────────

  describe('delete', () => {
    it('allows owner to delete own message', async () => {
      mockMessagesRepo.findById.mockResolvedValue(mockMessage);
      mockMessagesRepo.softDelete.mockResolvedValue(mockMessage);

      await expect(
        service.delete(new DeleteMessageCommand('msg-uuid-1', 'user-uuid-1', UserRole.USER)),
      ).resolves.not.toThrow();
    });

    it('allows admin to delete any message', async () => {
      mockMessagesRepo.findById.mockResolvedValue(mockMessage);
      mockMessagesRepo.softDelete.mockResolvedValue(mockMessage);

      await expect(
        service.delete(new DeleteMessageCommand('msg-uuid-1', 'other-user', UserRole.ADMIN)),
      ).resolves.not.toThrow();
    });

    it('throws ForbiddenException for non-owner regular user', async () => {
      mockMessagesRepo.findById.mockResolvedValue(mockMessage);
      await expect(
        service.delete(new DeleteMessageCommand('msg-uuid-1', 'other-user', UserRole.USER)),
      ).rejects.toThrow(ForbiddenException);
    });
  });

  // ── Reactions ────────────────────────────────────────────────────────────

  describe('addReaction', () => {
    it('adds reaction and emits event', async () => {
      mockMessagesRepo.findById.mockResolvedValue(mockMessage);
      mockMessagesRepo.addReaction.mockResolvedValue({});

      await service.addReaction(new AddReactionCommand('msg-uuid-1', 'user-uuid-1', '👍'));
      expect(mockEvents.emit).toHaveBeenCalledWith('message.reaction.added', expect.any(Object));
    });

    it('throws NotFoundException for unknown message', async () => {
      mockMessagesRepo.findById.mockResolvedValue(null);
      await expect(
        service.addReaction(new AddReactionCommand('ghost-id', 'user-uuid-1', '👍')),
      ).rejects.toThrow(NotFoundException);
    });
  });
});
