import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { BullModule } from '@nestjs/bull';
import { AuthController } from './controllers/auth.controller';
import { AuthService, EMAIL_QUEUE } from './services/auth.service';
import { TokenBlacklistService } from './services/token-blacklist.service';
import { DeviceSessionService } from './services/device-session.service';
import { JwtStrategy, LocalAuthStrategy } from './strategies';
import { EmailProcessor } from './processors/email.processor';
import { AppConfigService } from '@config/app.config';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [AppConfigService],
      useFactory: (config: AppConfigService) => ({
        secret: config.jwt.accessSecret,
        signOptions: { expiresIn: config.jwt.accessExpiry },
      }),
    }),
    BullModule.registerQueue({ name: EMAIL_QUEUE }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    TokenBlacklistService,
    DeviceSessionService,
    JwtStrategy,
    LocalAuthStrategy,
    EmailProcessor,
  ],
  exports: [AuthService, TokenBlacklistService, JwtModule],
})
export class IamModule {}
