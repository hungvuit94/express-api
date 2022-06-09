import { Module } from '@nestjs/common';
import { BranchService } from './branch.service';
import { BranchController } from './branch.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BranchEntity } from './entities/branch.entity';
import { ContactProfileEntity } from '../contact_profile/entities/contact_profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BranchEntity, ContactProfileEntity])],
  controllers: [BranchController],
  providers: [BranchService],
})
export class BranchModule {}
