import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsInt, IsOptional, IsString, IsUUID, Max, MaxLength, Min } from 'class-validator';
import { CursorPaginationDto } from '@common/dto';
import { RoomStatus } from '../../../../generated/prisma';

// ── List / Search ─────────────────────────────────────────────────────────────

export class ListRoomsDto extends CursorPaginationDto {
  @ApiPropertyOptional({ example: 'tech', description: 'Search by name (trigram)' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  q?: string;

  @ApiPropertyOptional({ example: 'Technology' })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiPropertyOptional({ isArray: true, type: String, example: ['dev', 'opensource'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];
}

export class ListMembersDto extends CursorPaginationDto {}

// ── Response DTOs ─────────────────────────────────────────────────────────────

export class RoomDto {
  @ApiProperty()
  id!: string;

  @ApiProperty()
  name!: string;

  @ApiProperty()
  slug!: string;

  @ApiPropertyOptional()
  description!: string | null;

  @ApiPropertyOptional()
  avatarUrl!: string | null;

  @ApiProperty()
  category!: string;

  @ApiProperty({ isArray: true, type: String })
  tags!: string[];

  @ApiProperty({ enum: RoomStatus })
  status!: RoomStatus;

  @ApiPropertyOptional()
  slowModeSeconds!: number | null;

  @ApiProperty({ description: 'Number of members currently online (from Redis)' })
  onlineCount!: number;

  @ApiProperty()
  createdAt!: Date;
}

export class RoomMemberDto {
  @ApiProperty()
  id!: string;

  @ApiProperty()
  handle!: string;

  @ApiProperty()
  name!: string;

  @ApiPropertyOptional()
  avatarUrl!: string | null;

  @ApiProperty()
  isOnline!: boolean;

  @ApiProperty({ description: 'Whether this member is a moderator of this room' })
  isModerator!: boolean;
}

// ── Moderation ────────────────────────────────────────────────────────────────

export class SlowModeDto {
  @ApiPropertyOptional({
    description: 'Seconds between messages (null to disable)',
    example: 10,
    minimum: 1,
    maximum: 3600,
    nullable: true,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(3600)
  seconds!: number | null;
}

export class AssignModeratorDto {
  @ApiProperty({ description: 'User ID to assign as moderator' })
  @IsUUID()
  userId!: string;
}
