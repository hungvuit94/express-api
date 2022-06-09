import { Module } from '@nestjs/common';
import { BusinessProfileService } from './business_profile.service';
import { BusinessProfileController } from './business_profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessProfileEntity } from './entities/business_profile.entity';
import { AddressProfileEntity } from '../address_profile/entities/address_profile.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BusinessProfileEntity, AddressProfileEntity]),
  ],
  controllers: [BusinessProfileController],
  providers: [BusinessProfileService],
})
export class BusinessProfileModule {}
