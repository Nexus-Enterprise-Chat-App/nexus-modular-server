import { Body, Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { UsersService } from '../services/users.service';
import { CurrentUser, ApiPaginatedResponse } from '@common/decorators';
import { JwtPayload } from '@modules/iam/interfaces/jwt-payload.interface';
import { SearchUsersDto, UpdateProfileDto, UserProfileDto } from '../dto/users.dto';

@ApiTags('Users')
@ApiBearerAuth('access-token')
@Controller({ path: 'users', version: '1' })
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // GET /v1/users/me
  @Get('me')
  @ApiOperation({ summary: 'Get your own profile' })
  async getMe(@CurrentUser() user: JwtPayload): Promise<UserProfileDto> {
    return this.usersService.getMe(user.sub);
  }

  // PATCH /v1/users/me
  @Patch('me')
  @ApiOperation({ summary: 'Update your name or bio' })
  async updateMe(
    @CurrentUser() user: JwtPayload,
    @Body() dto: UpdateProfileDto,
  ): Promise<UserProfileDto> {
    return this.usersService.updateMe(user.sub, dto);
  }

  // GET /v1/users/search?q=jane&limit=20&cursor=...
  @Get('search')
  @ApiOperation({ summary: 'Search users by name or handle' })
  @ApiPaginatedResponse(UserProfileDto)
  async search(@Query() dto: SearchUsersDto, @CurrentUser() user: JwtPayload) {
    return this.usersService.search(dto, user.sub);
  }

  // GET /v1/users/:idOrHandle
  @Get(':idOrHandle')
  @ApiOperation({ summary: "Get a user's public profile by UUID or @handle" })
  @ApiParam({ name: 'idOrHandle', example: 'janedoe' })
  async getProfile(
    @Param('idOrHandle') idOrHandle: string,
    @CurrentUser() user: JwtPayload,
  ): Promise<UserProfileDto> {
    return this.usersService.getProfile(idOrHandle, user.sub);
  }
}
