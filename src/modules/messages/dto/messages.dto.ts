import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';
import { CursorPaginationDto } from '@common/dto';
import { MessageStatus, MessageType } from '../../../../generated/prisma';

// ── Send Message ──────────────────────────────────────────────────────────────

export class SendMessageDto {
  @ApiProperty({ enum: MessageType, default: MessageType.TEXT })
  @IsEnum(MessageType)
  type: MessageType = MessageType.TEXT;

  @ApiPropertyOptional({ example: 'Hello everyone! 👋', maxLength: 4000 })
  @IsOptional()
  @IsString()
  @MaxLength(4000)
  content?: string;

  @ApiPropertyOptional({ description: 'Media URL — set by MediaModule after upload' })
  @IsOptional()
  @IsString()
  mediaUrl?: string;

  @ApiPropertyOptional({ description: 'Reply to a specific message UUID' })
  @IsOptional()
  @IsUUID()
  replyToId?: string;

  @ApiPropertyOptional({
    description: 'Client-generated UUID for optimistic UI deduplication',
    example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  })
  @IsOptional()
  @IsUUID()
  clientTempId?: string;
}

// ── Edit Message ──────────────────────────────────────────────────────────────

export class EditMessageDto {
  @ApiProperty({ example: 'Updated message content', maxLength: 4000 })
  @IsString()
  @MaxLength(4000)
  content!: string;
}

// ── List Messages ─────────────────────────────────────────────────────────────

export class ListMessagesDto extends CursorPaginationDto {}

// ── Reaction ──────────────────────────────────────────────────────────────────

export class AddReactionDto {
  @ApiProperty({ example: '👍', description: 'Any single emoji character' })
  @IsString()
  @MaxLength(8)
  emoji!: string;
}

// ── Update Status ─────────────────────────────────────────────────────────────

export class UpdateMessageStatusDto {
  @ApiProperty({ enum: MessageStatus })
  @IsEnum(MessageStatus)
  status!: MessageStatus;
}

// ── Response DTOs ─────────────────────────────────────────────────────────────

export class ReactionSummaryDto {
  @ApiProperty({ example: '👍' })
  emoji!: string;

  @ApiProperty({ example: 3 })
  count!: number;

  @ApiProperty({
    example: true,
    description: 'Whether the requesting user has reacted with this emoji',
  })
  reactedByMe!: boolean;
}

export class MessageSenderDto {
  @ApiProperty()
  id!: string;

  @ApiProperty()
  handle!: string;

  @ApiProperty()
  name!: string;

  @ApiPropertyOptional()
  avatarUrl!: string | null;
}

export class MessageReplyDto {
  @ApiProperty()
  id!: string;

  @ApiPropertyOptional()
  content!: string | null;

  @ApiProperty({ type: MessageSenderDto })
  sender!: MessageSenderDto;
}

export class MessageDto {
  @ApiProperty()
  id!: string;

  @ApiProperty({ enum: MessageType })
  type!: MessageType;

  @ApiPropertyOptional()
  content!: string | null;

  @ApiPropertyOptional()
  mediaUrl!: string | null;

  @ApiPropertyOptional()
  mediaMetadata!: Record<string, unknown> | null;

  @ApiProperty({ type: MessageSenderDto })
  sender!: MessageSenderDto;

  @ApiPropertyOptional()
  roomId!: string | null;

  @ApiPropertyOptional()
  dmConversationId!: string | null;

  @ApiPropertyOptional({ type: MessageReplyDto })
  replyTo!: MessageReplyDto | null;

  @ApiProperty()
  isEdited!: boolean;

  @ApiPropertyOptional()
  editedAt!: Date | null;

  @ApiProperty({ description: 'null means deleted' })
  isDeleted!: boolean;

  @ApiProperty({ type: [ReactionSummaryDto] })
  reactions!: ReactionSummaryDto[];

  @ApiProperty({ enum: MessageStatus, nullable: true })
  myStatus!: MessageStatus | null;

  @ApiPropertyOptional()
  clientTempId!: string | null;

  @ApiProperty()
  createdAt!: Date;
}
