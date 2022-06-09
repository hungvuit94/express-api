import { Module } from '@nestjs/common';
import { MemberProfileService } from './member_profile.service';
import { MemberProfileController } from './member_profile.controller';
import { MemberProfileEntity } from './entities/member_profile.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MemberProfileEntity, UserEntity])],
  controllers: [MemberProfileController],
  providers: [MemberProfileService],
})
export class MemberProfileModule {}
