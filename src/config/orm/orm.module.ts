import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../modules/user/entities/user.entity';
import { MemberProfileEntity } from '../../modules/member_profile/entities/member_profile.entity';
import { DeviceEntity } from '../../modules/device/entities/device.entity';
import { ContactProfileEntity } from '../../modules/contact_profile/entities/contact_profile.entity';
import { BusinessProfileEntity } from '../../modules/business_profile/entities/business_profile.entity';
import { AddressProfileEntity } from 'src/modules/address_profile/entities/address_profile.entity';
import { BranchEntity } from 'src/modules/branch/entities/branch.entity';
import { GuestProfileEntity } from 'src/modules/guest_profile/entities/guest_profile.entity';
import { UserSessionEntity } from 'src/modules/user_session/entities/user_session.entity';
import { TermAndCondEntity } from 'src/modules/term-and-cond/entities/term-and-cond.entity';
// const entities = [Users];
// const entities = [__dirname + '/**/entity/*.entity{.ts,.js}'];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        UserEntity,
        MemberProfileEntity,
        DeviceEntity,
        ContactProfileEntity,
        BusinessProfileEntity,
        AddressProfileEntity,
        BranchEntity,
        GuestProfileEntity,
        UserSessionEntity,
        TermAndCondEntity,
      ],
      logging: true,
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
})
export class ORMModule {}
