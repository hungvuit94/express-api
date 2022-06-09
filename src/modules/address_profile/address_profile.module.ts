import { Module } from '@nestjs/common';
import { AddressProfileService } from './address_profile.service';
import { AddressProfileController } from './address_profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressProfileEntity } from './entities/address_profile.entity';
import { UserEntity } from '../user/entities/user.entity';
import { BusinessProfileEntity } from '../business_profile/entities/business_profile.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AddressProfileEntity,
      UserEntity,
      BusinessProfileEntity,
    ]),
  ],
  controllers: [AddressProfileController],
  providers: [AddressProfileService],
})
export class AddressProfileModule {}
