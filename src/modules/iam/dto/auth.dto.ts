import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { DevicePlatform } from 'generated/prisma/client/enums';

// ── Registration ─────────────────────────────────────────────────────────────

export class RegisterDto {
  @ApiProperty({ example: 'john@example.com' })
  @IsEmail({}, { message: 'Please provide a valid email address' })
  email!: string;

  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(60)
  name!: string;

  @ApiProperty({
    example: 'johndoe',
    description: 'Unique handle (alphanumeric + underscore, 3-30 chars)',
  })
  @IsString()
  @Matches(/^[a-zA-Z0-9_]{3,30}$/, {
    message:
      'Handle must be 3-30 characters and contain only letters, numbers, and underscores',
  })
  handle!: string;

  @ApiProperty({
    example: 'Password1!',
    description: 'Min 8 chars, 1 uppercase, 1 number, 1 special character',
  })
  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/, {
    message:
      'Password must contain at least 1 uppercase letter, 1 number, and 1 special character',
  })
  password!: string;
}

// ── Login ────────────────────────────────────────────────────────────────────

export class DeviceInfoDto {
  @ApiProperty({ example: 'device-uuid-v4' })
  @IsString()
  @IsNotEmpty()
  deviceId!: string;

  @ApiProperty({ enum: DevicePlatform })
  @IsEnum(DevicePlatform)
  platform!: DevicePlatform;

  @ApiPropertyOptional({ example: 'fcm-push-token' })
  @IsOptional()
  @IsString()
  pushToken?: string;

  @ApiPropertyOptional({ example: 'My iPhone' })
  @IsOptional()
  @IsString()
  deviceName?: string;

  @ApiPropertyOptional({ example: 'iPhone 15 Pro' })
  @IsOptional()
  @IsString()
  deviceModel?: string;
}

export class LoginDto {
  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  email!: string;

  @ApiProperty({ example: 'Password1!' })
  @IsString()
  @IsNotEmpty()
  password!: string;

  @ApiProperty({ type: DeviceInfoDto })
  deviceInfo!: DeviceInfoDto;
}

// ── Token Refresh ────────────────────────────────────────────────────────────

export class RefreshTokenDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  refreshToken!: string;
}

// ── Forgot / Reset Password ──────────────────────────────────────────────────

export class ForgotPasswordDto {
  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  email!: string;
}

export class ResetPasswordDto {
  @ApiProperty({ description: 'Reset token received via email' })
  @IsString()
  @IsNotEmpty()
  token!: string;

  @ApiProperty({ example: 'NewPassword1!' })
  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/, {
    message:
      'Password must contain at least 1 uppercase letter, 1 number, and 1 special character',
  })
  newPassword!: string;
}

// ── Revoke Session ───────────────────────────────────────────────────────────

export class RevokeSessionDto {
  @ApiProperty()
  @IsUUID()
  deviceId!: string;
}

// ── Response DTOs ────────────────────────────────────────────────────────────

export class AuthUserDto {
  @ApiProperty()
  id!: string;

  @ApiProperty()
  email!: string;

  @ApiProperty()
  handle!: string;

  @ApiProperty()
  name!: string;

  @ApiPropertyOptional()
  avatarUrl?: string | null;

  @ApiProperty()
  role!: string;

  @ApiProperty()
  permissions!: string[];
}

export class AuthResponseDto {
  @ApiProperty()
  accessToken!: string;

  @ApiProperty()
  refreshToken!: string;

  @ApiProperty({ type: AuthUserDto })
  user!: AuthUserDto;
}

export class DeviceSessionDto {
  @ApiProperty()
  id!: string;

  @ApiProperty()
  deviceId!: string;

  @ApiProperty({ enum: DevicePlatform })
  platform!: DevicePlatform;

  @ApiPropertyOptional()
  deviceName?: string | null;

  @ApiPropertyOptional()
  deviceModel?: string | null;

  @ApiProperty()
  lastSeenAt!: Date;

  @ApiProperty()
  createdAt!: Date;
}
