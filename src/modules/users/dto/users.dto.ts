import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CursorPaginationDto } from '@src/common/dto';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { UserRole } from 'generated/prisma/client/enums';

// ── Update Profile ────────────────────────────────────────────────────────────

export class UpdateProfileDto {
  @ApiPropertyOptional({ example: 'Jane Doe', minLength: 2, maxLength: 60 })
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(60)
  name?: string;

  @ApiPropertyOptional({ example: 'Building cool things 🚀', maxLength: 200 })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  bio?: string;
}

// ── Response DTOs ─────────────────────────────────────────────────────────────

export class UserProfileDto {
  @ApiProperty({ example: 'a1b2c3d4-...' })
  id!: string;

  @ApiProperty({ example: 'janedoe' })
  handle!: string;

  @ApiProperty({ example: 'Jane Doe' })
  name!: string;

  @ApiPropertyOptional({ example: 'https://storage.nexus.app/avatars/...' })
  avatarUrl!: string | null;

  @ApiPropertyOptional({ example: 'Building cool things 🚀' })
  bio!: string | null;

  @ApiProperty({ enum: UserRole })
  role!: UserRole;

  @ApiProperty({ example: '2026-01-01T00:00:00.000Z' })
  createdAt!: Date;

  // Populated from Redis presence — null if offline or private
  @ApiPropertyOptional({ example: '2026-03-11T10:00:00.000Z' })
  lastSeenAt!: Date | null;

  @ApiProperty({ example: false })
  isOnline!: boolean;

  @ApiProperty({
    example: false,
    description: 'Whether you have blocked this user',
  })
  isBlockedByMe!: boolean;
}

export class PublicUserDto {
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
}

export class SearchUsersDto extends CursorPaginationDto {
  @ApiPropertyOptional({
    example: 'jane',
    description: 'Search by name or handle (trigram)',
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  q?: string;
}
