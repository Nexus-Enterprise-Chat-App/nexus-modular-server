/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiNoContentResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { MessagesService } from '../services/messages.service';
import { RoomsRepository } from '@modules/rooms/repositories/rooms.repository';
import { CurrentUser, ApiPaginatedResponse } from '@common/decorators';
import { JwtPayload } from '@modules/iam/interfaces/jwt-payload.interface';
import {
  AddReactionDto,
  EditMessageDto,
  ListMessagesDto,
  MessageDto,
  SendMessageDto,
} from '../dto/messages.dto';
import {
  SendMessageCommand,
  EditMessageCommand,
  DeleteMessageCommand,
  AddReactionCommand,
  RemoveReactionCommand,
  PinMessageCommand,
  UnpinMessageCommand,
} from '../commands';
import { GetRoomMessagesQuery, GetDmMessagesQuery, GetPinnedMessagesQuery } from '../queries';

// ── Room Messages ─────────────────────────────────────────────────────────────

@ApiTags('Messages')
@ApiBearerAuth('access-token')
@Controller({ path: 'rooms/:roomId/messages', version: '1' })
export class RoomMessagesController {
  constructor(
    private readonly messagesService: MessagesService,
    private readonly roomsRepo: RoomsRepository,
  ) {}

  @Get()
  @ApiOperation({ summary: 'List room messages (cursor-paginated, newest first)' })
  @ApiPaginatedResponse(MessageDto)
  async list(
    @Param('roomId') roomId: string,
    @Query() dto: ListMessagesDto,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.messagesService.getRoomMessages(
      new GetRoomMessagesQuery(roomId, user.sub, dto.limit ?? 30, dto.cursor),
    );
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Send a message to a room' })
  async send(
    @Param('roomId') roomId: string,
    @Body() dto: SendMessageDto,
    @CurrentUser() user: JwtPayload,
  ): Promise<MessageDto> {
    return this.messagesService.send(
      new SendMessageCommand(
        user.sub,
        dto.type,
        dto.content,
        dto.mediaUrl,
        dto.replyToId,
        dto.clientTempId,
        roomId,
        undefined,
      ),
    );
  }

  @Get('pinned')
  @ApiOperation({ summary: 'Get all pinned messages in a room' })
  async getPinned(
    @Param('roomId') roomId: string,
    @CurrentUser() user: JwtPayload,
  ): Promise<MessageDto[]> {
    return this.messagesService.getPinnedMessages(new GetPinnedMessagesQuery(roomId, user.sub));
  }

  @Post(':messageId/pin')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Pin a message in a room (Moderator/Admin)' })
  @ApiNoContentResponse()
  async pin(
    @Param('roomId') roomId: string,
    @Param('messageId') messageId: string,
    @CurrentUser() user: JwtPayload,
  ): Promise<void> {
    const isMod = await this.roomsRepo.isModerator(roomId, user.sub);
    return this.messagesService.pinMessage(
      new PinMessageCommand(roomId, messageId, user.sub, user.role, isMod),
    );
  }

  @Delete(':messageId/pin')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Unpin a message in a room (Moderator/Admin)' })
  @ApiNoContentResponse()
  async unpin(
    @Param('roomId') roomId: string,
    @Param('messageId') messageId: string,
    @CurrentUser() user: JwtPayload,
  ): Promise<void> {
    const isMod = await this.roomsRepo.isModerator(roomId, user.sub);
    return this.messagesService.unpinMessage(
      new UnpinMessageCommand(roomId, messageId, user.role, isMod),
    );
  }
}

// ── Single Message Actions ────────────────────────────────────────────────────

@ApiTags('Messages')
@ApiBearerAuth('access-token')
@Controller({ path: 'messages', version: '1' })
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Patch(':messageId')
  @ApiOperation({ summary: 'Edit your own message (within 15-minute window)' })
  async edit(
    @Param('messageId') messageId: string,
    @Body() dto: EditMessageDto,
    @CurrentUser() user: JwtPayload,
  ): Promise<MessageDto> {
    return this.messagesService.edit(new EditMessageCommand(messageId, user.sub, dto.content));
  }

  @Delete(':messageId')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a message (owner, moderator, or admin)' })
  @ApiNoContentResponse()
  async delete(
    @Param('messageId') messageId: string,
    @CurrentUser() user: JwtPayload,
  ): Promise<void> {
    return this.messagesService.delete(new DeleteMessageCommand(messageId, user.sub, user.role));
  }

  @Post(':messageId/reactions')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Add a reaction to a message' })
  @ApiNoContentResponse()
  async addReaction(
    @Param('messageId') messageId: string,
    @Body() dto: AddReactionDto,
    @CurrentUser() user: JwtPayload,
  ): Promise<void> {
    return this.messagesService.addReaction(new AddReactionCommand(messageId, user.sub, dto.emoji));
  }

  @Delete(':messageId/reactions/:emoji')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remove your reaction from a message' })
  @ApiNoContentResponse()
  async removeReaction(
    @Param('messageId') messageId: string,
    @Param('emoji') emoji: string,
    @CurrentUser() user: JwtPayload,
  ): Promise<void> {
    return this.messagesService.removeReaction(
      new RemoveReactionCommand(messageId, user.sub, emoji),
    );
  }
}

// ── DM Messages ───────────────────────────────────────────────────────────────

@ApiTags('DMs')
@ApiBearerAuth('access-token')
@Controller({ path: 'dm-conversations/:dmId/messages', version: '1' })
export class DmMessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  @ApiOperation({ summary: 'List DM messages (cursor-paginated, newest first)' })
  @ApiPaginatedResponse(MessageDto)
  async list(
    @Param('dmId') dmId: string,
    @Query() dto: ListMessagesDto,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.messagesService.getDmMessages(
      new GetDmMessagesQuery(dmId, user.sub, dto.limit ?? 30, dto.cursor),
    );
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Send a direct message' })
  async send(
    @Param('dmId') dmId: string,
    @Body() dto: SendMessageDto,
    @CurrentUser() user: JwtPayload,
  ): Promise<MessageDto> {
    return this.messagesService.send(
      new SendMessageCommand(
        user.sub,
        dto.type,
        dto.content,
        dto.mediaUrl,
        dto.replyToId,
        dto.clientTempId,
        undefined,
        dmId,
      ),
    );
  }
}
