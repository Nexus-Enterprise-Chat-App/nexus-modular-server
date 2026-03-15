import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';
import { AppConfigService } from '@config/app.config';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { TokenBlacklistService } from '../services/token-blacklist.service';
import { AuthService } from '../services/auth.service';
import { User } from '../../../../generated/prisma';

// ── JWT Strategy ─────────────────────────────────────────────────────────────
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly config: AppConfigService,
    private readonly blacklist: TokenBlacklistService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.jwt.accessSecret,
    });
  }

  async validate(payload: JwtPayload): Promise<JwtPayload> {
    const isBlacklisted = await this.blacklist.isBlacklisted(payload.jti);
    if (isBlacklisted) {
      throw new UnauthorizedException('Token has been revoked');
    }
    return payload;
  }
}

// ── Local Strategy (email + password) ────────────────────────────────────────
@Injectable()
export class LocalAuthStrategy extends PassportStrategy(LocalStrategy, 'local') {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<User> {
    const user = await this.authService.validateCredentials(email, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }
}
