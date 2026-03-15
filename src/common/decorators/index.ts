/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
  applyDecorators,
} from '@nestjs/common';
import { ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { JwtPayload } from '@src/modules/iam/interfaces/jwt-payload.interface';
import { UserRole } from 'generated/prisma/client/enums';

// ── @CurrentUser() ───────────────────────────────────────────────────────────
// Extracts the authenticated user from request.user (set by JwtStrategy)
export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): JwtPayload => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as JwtPayload;
  },
);

// ── @WsCurrentUser() ─────────────────────────────────────────────────────────
// Extracts the authenticated user from socket.data.user (set by WsJwtGuard)
export const WsCurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): JwtPayload => {
    const client = ctx.switchToWs().getClient();
    return client.data.user as JwtPayload;
  },
);

// ── @Roles(...roles) ─────────────────────────────────────────────────────────
// Metadata decorator consumed by RolesGuard
export const ROLES_KEY = 'roles';
export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);

// ── @Permissions(...permissions) ─────────────────────────────────────────────
// Metadata decorator consumed by PermissionsGuard
export const PERMISSIONS_KEY = 'permissions';
export const Permissions = (...permissions: string[]) =>
  SetMetadata(PERMISSIONS_KEY, permissions);

// ── @Public() ────────────────────────────────────────────────────────────────
// Marks an endpoint as exempt from JwtAuthGuard
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

// ── @ApiPaginatedResponse(dto) ───────────────────────────────────────────────
// Composite Swagger decorator for cursor-paginated endpoints
export const ApiPaginatedResponse = (dto: new (...args: any[]) => any) =>
  applyDecorators(
    ApiOkResponse({
      schema: {
        allOf: [
          {
            properties: {
              success: { type: 'boolean', example: true },
              data: {
                type: 'array',
                items: { $ref: getSchemaPath(dto) },
              },
              meta: {
                type: 'object',
                properties: {
                  nextCursor: { type: 'string', nullable: true },
                  hasMore: { type: 'boolean' },
                  timestamp: { type: 'string', format: 'date-time' },
                },
              },
            },
          },
        ],
      },
    }),
  );
