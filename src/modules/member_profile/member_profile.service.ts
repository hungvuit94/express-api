import { Injectable } from '@nestjs/common';
import { CreateMemberProfileDto } from './dto/create-member_profile.dto';
import { UpdateMemberProfileDto } from './dto/update-member_profile.dto';

@Injectable()
export class MemberProfileService {
  create(createMemberProfileDto: CreateMemberProfileDto) {
    return 'This action adds a new memberProfile';
  }

  findAll() {
    return `This action returns all memberProfile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} memberProfile`;
  }

  update(id: number, updateMemberProfileDto: UpdateMemberProfileDto) {
    return `This action updates a #${id} memberProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} memberProfile`;
  }
}
