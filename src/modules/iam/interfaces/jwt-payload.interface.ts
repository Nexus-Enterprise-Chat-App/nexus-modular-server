import { UserRole } from '../../../../generated/prisma';

export interface JwtPayload {
  sub: string; // userId
  email: string;
  handle: string;
  name: string;
  role: UserRole;
  permissions: string[];
  deviceId: string;
  jti: string; // unique token ID for blacklisting
  iat?: number;
  exp?: number;
}

export interface RefreshTokenPayload {
  sub: string;
  deviceId: string;
  jti: string;
  iat?: number;
  exp?: number;
}

export interface ResetTokenPayload {
  sub: string;
  email: string;
  jti: string;
  iat?: number;
  exp?: number;
}
