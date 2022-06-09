import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule, PassportStrategy } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { UserModule } from '../user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/entities/user.entity';
import { MemberProfileEntity } from '../member_profile/entities/member_profile.entity';
import { AddressProfileEntity } from '../address_profile/entities/address_profile.entity';
import { UserSessionEntity } from '../user_session/entities/user_session.entity';
import { DeviceEntity } from '../device/entities/device.entity';
import { HttpModule } from '@nestjs/axios';
import { UserSessionService } from '../user_session/user_session.service';
import { DeviceService } from '../device/device.service';
import { UserService } from '../user/user.service';
import { BusinessProfileService } from '../business_profile/business_profile.service';
import { BusinessProfileEntity } from '../business_profile/entities/business_profile.entity';

@Global()
@Module({
  controllers: [AuthController],
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      MemberProfileEntity,
      AddressProfileEntity,
      UserSessionEntity,
      DeviceEntity,
      BusinessProfileEntity
    ]),
    UserModule,
    PassportModule.register({
      session: true,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: configService.get('JWT_TTL') + 's' },
      }),
      inject: [ConfigService],
    }),
    ConfigModule,
    HttpModule,
  ],
  providers: [
    AuthService,
    JwtStrategy,
    LocalStrategy,
    UserSessionService,
    DeviceService,
    UserService,
    BusinessProfileService
  ],
  exports: [AuthService],
})
export class AuthModule {}
