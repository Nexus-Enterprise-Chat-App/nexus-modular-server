/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { IS_PUBLIC_KEY, ROLES_KEY, PERMISSIONS_KEY } from '../decorators';
import { TokenBlacklistService } from '@modules/iam/services/token-blacklist.service';
import { AppConfigService } from '@config/app.config';
import { JwtPayload } from '@modules/iam/interfaces/jwt-payload.interface';
import { UserRole } from '../../../generated/prisma';

// ── JwtAuthGuard ─────────────────────────────────────────────────────────────
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private readonly reflector: Reflector) {
    super();
  }

  canActivate(ctx: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      ctx.getHandler(),
      ctx.getClass(),
    ]);
    if (isPublic) return true;
    return super.canActivate(ctx);
  }

  handleRequest<T = JwtPayload>(err: any, user: T): T {
    if (err || !user) {
      throw err || new UnauthorizedException('Invalid or expired token');
    }
    return user;
  }
}

// ── RolesGuard ───────────────────────────────────────────────────────────────
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(ctx: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(ROLES_KEY, [
      ctx.getHandler(),
      ctx.getClass(),
    ]);
    if (!requiredRoles || requiredRoles.length === 0) return true;

    const { user } = ctx.switchToHttp().getRequest<{ user: JwtPayload }>();
    if (!user) throw new UnauthorizedException();

    const hasRole = requiredRoles.includes(user.role as UserRole);
    if (!hasRole) {
      throw new ForbiddenException(`Requires one of these roles: ${requiredRoles.join(', ')}`);
    }
    return true;
  }
}

// ── PermissionsGuard ─────────────────────────────────────────────────────────
@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(ctx: ExecutionContext): boolean {
    const requiredPerms = this.reflector.getAllAndOverride<string[]>(PERMISSIONS_KEY, [
      ctx.getHandler(),
      ctx.getClass(),
    ]);
    if (!requiredPerms || requiredPerms.length === 0) return true;

    const { user } = ctx.switchToHttp().getRequest<{ user: JwtPayload }>();
    if (!user) throw new UnauthorizedException();

    const hasAll = requiredPerms.every((p) => user.permissions.includes(p));
    if (!hasAll) {
      throw new ForbiddenException('Insufficient permissions');
    }
    return true;
  }
}

// ── WsJwtGuard ───────────────────────────────────────────────────────────────
@Injectable()
export class WsJwtGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly blacklistService: TokenBlacklistService,
    private readonly configService: AppConfigService,
  ) {}

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const client = ctx.switchToWs().getClient<any>();
    const token: string | undefined =
      client.handshake?.auth?.token ||
      client.handshake?.headers?.authorization?.replace('Bearer ', '');

    if (!token) {
      client.emit('error', { code: 'UNAUTHORIZED', message: 'No token provided' });
      client.disconnect();
      return false;
    }

    try {
      const payload = this.jwtService.verify<JwtPayload>(token, {
        secret: this.configService.jwt.accessSecret,
      });

      const isBlacklisted = await this.blacklistService.isBlacklisted(payload.jti);
      if (isBlacklisted) {
        client.emit('error', { code: 'UNAUTHORIZED', message: 'Token revoked' });
        client.disconnect();
        return false;
      }

      client.data.user = payload;
      return true;
    } catch {
      client.emit('error', { code: 'UNAUTHORIZED', message: 'Invalid token' });
      client.disconnect();
      return false;
    }
  }
}
