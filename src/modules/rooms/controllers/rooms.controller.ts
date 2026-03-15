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
import {
  ApiBearerAuth,
  ApiNoContentResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { RoomsService } from '../services/rooms.service';
import { CurrentUser, Roles, ApiPaginatedResponse } from '@common/decorators';
import { JwtPayload } from '@modules/iam/interfaces/jwt-payload.interface';
import {
  AssignModeratorDto,
  ListMembersDto,
  ListRoomsDto,
  RoomDto,
  RoomMemberDto,
  SlowModeDto,
} from '../dto/rooms.dto';
import { UserRole } from '../../../../generated/prisma';

@ApiTags('Rooms')
@ApiBearerAuth('access-token')
@Controller({ path: 'rooms', version: '1' })
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  // GET /v1/rooms
  @Get()
  @ApiOperation({ summary: 'List all active rooms with optional search and filter' })
  @ApiPaginatedResponse(RoomDto)
  async listRooms(@Query() dto: ListRoomsDto) {
    return this.roomsService.listRooms(dto);
  }

  // GET /v1/rooms/:slugOrId
  @Get(':slugOrId')
  @ApiOperation({ summary: 'Get a room by slug or UUID' })
  @ApiParam({ name: 'slugOrId', example: 'tech-talk' })
  async getRoom(@Param('slugOrId') slugOrId: string): Promise<RoomDto> {
    return this.roomsService.getRoom(slugOrId);
  }

  // GET /v1/rooms/:roomId/members
  @Get(':roomId/members')
  @ApiOperation({ summary: 'List room members with online status' })
  @ApiPaginatedResponse(RoomMemberDto)
  async listMembers(@Param('roomId') roomId: string, @Query() dto: ListMembersDto) {
    return this.roomsService.listMembers(roomId, dto);
  }

  // PATCH /v1/rooms/:roomId/slow-mode
  @Patch(':roomId/slow-mode')
  @Roles(UserRole.MODERATOR, UserRole.ADMIN)
  @ApiOperation({ summary: 'Set or disable slow mode for a room (Moderator/Admin)' })
  async setSlowMode(
    @Param('roomId') roomId: string,
    @Body() dto: SlowModeDto,
    @CurrentUser() user: JwtPayload,
  ): Promise<RoomDto> {
    return this.roomsService.setSlowMode(roomId, dto, user);
  }

  // POST /v1/rooms/:roomId/moderators
  @Post(':roomId/moderators')
  @Roles(UserRole.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Assign a moderator to a room (Admin only)' })
  @ApiNoContentResponse()
  async assignModerator(
    @Param('roomId') roomId: string,
    @Body() dto: AssignModeratorDto,
    @CurrentUser() user: JwtPayload,
  ): Promise<void> {
    return this.roomsService.assignModerator(roomId, dto, user);
  }

  // DELETE /v1/rooms/:roomId/moderators/:userId
  @Delete(':roomId/moderators/:userId')
  @Roles(UserRole.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remove a moderator from a room (Admin only)' })
  @ApiNoContentResponse()
  async removeModerator(
    @Param('roomId') roomId: string,
    @Param('userId') userId: string,
    @CurrentUser() user: JwtPayload,
  ): Promise<void> {
    return this.roomsService.removeModerator(roomId, userId, user);
  }
}
