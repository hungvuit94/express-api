import { Module } from '@nestjs/common';
import { ContactProfileService } from './contact_profile.service';
import { ContactProfileController } from './contact_profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactProfileEntity } from './entities/contact_profile.entity';
import { MemberProfileEntity } from '../member_profile/entities/member_profile.entity';
import { BranchEntity } from '../branch/entities/branch.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ContactProfileEntity,
      MemberProfileEntity,
      BranchEntity,
    ]),
  ],
  controllers: [ContactProfileController],
  providers: [ContactProfileService],
})
export class ContactProfileModule {}
