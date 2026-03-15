import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthService } from '../services/auth.service';
import { CurrentUser, Public } from 'common/decorators';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import {
  AuthResponseDto,
  DeviceSessionDto,
  ForgotPasswordDto,
  LoginDto,
  RefreshTokenDto,
  RegisterDto,
  ResetPasswordDto,
} from '../dto/auth.dto';

@ApiTags('IAM — Authentication')
@Controller({ path: 'auth', version: '1' })
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // POST /v1/auth/register
  @Post('register')
  @Public()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Register a new user account' })
  @ApiResponse({ status: 201, type: AuthResponseDto, description: 'Account created successfully' })
  @ApiResponse({ status: 409, description: 'Email or handle already in use' })
  async register(@Body() dto: RegisterDto, @Req() req: Request): Promise<AuthResponseDto> {
    return this.authService.register(dto, req.ip);
  }

  // POST /v1/auth/login
  @Post('login')
  @Public()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login with email and password' })
  @ApiResponse({ status: 200, type: AuthResponseDto, description: 'Login successful' })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
  async login(@Body() dto: LoginDto, @Req() req: Request): Promise<AuthResponseDto> {
    return this.authService.login(dto, req.ip);
  }

  // POST /v1/auth/refresh
  @Post('refresh')
  @Public()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Refresh access token using refresh token' })
  @ApiResponse({ status: 200, description: 'New token pair issued' })
  @ApiResponse({ status: 401, description: 'Invalid or expired refresh token' })
  async refresh(@Body() dto: RefreshTokenDto) {
    return this.authService.refresh(dto.refreshToken);
  }

  // POST /v1/auth/logout
  @Post('logout')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Logout — blacklist access token and clear device session' })
  @ApiResponse({ status: 204, description: 'Logged out successfully' })
  async logout(@CurrentUser() user: JwtPayload): Promise<void> {
    await this.authService.logout(
      user.sub,
      user.deviceId,
      user.jti,
      user.exp ?? Math.floor(Date.now() / 1000) + 900,
    );
  }

  // POST /v1/auth/forgot-password
  @Post('forgot-password')
  @Public()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Send password reset email' })
  @ApiResponse({ status: 204, description: 'Reset email sent (if account exists)' })
  async forgotPassword(@Body() dto: ForgotPasswordDto): Promise<void> {
    await this.authService.forgotPassword(dto.email);
  }

  // POST /v1/auth/reset-password
  @Post('reset-password')
  @Public()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Reset password using token from email' })
  @ApiResponse({ status: 204, description: 'Password reset successfully' })
  @ApiResponse({ status: 400, description: 'Invalid or expired reset token' })
  async resetPassword(@Body() dto: ResetPasswordDto): Promise<void> {
    await this.authService.resetPassword(dto.token, dto.newPassword);
  }

  // GET /v1/auth/sessions
  @Get('sessions')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'List all active device sessions for the current user' })
  @ApiResponse({ status: 200, type: [DeviceSessionDto] })
  async listSessions(@CurrentUser() user: JwtPayload): Promise<DeviceSessionDto[]> {
    return this.authService.listSessions(user.sub);
  }

  // DELETE /v1/auth/sessions/:deviceId
  @Delete('sessions/:deviceId')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Revoke a specific device session' })
  @ApiResponse({ status: 204, description: 'Session revoked' })
  async revokeSession(
    @CurrentUser() user: JwtPayload,
    @Param('deviceId') deviceId: string,
  ): Promise<void> {
    await this.authService.revokeSession(user.sub, deviceId);
  }
}
