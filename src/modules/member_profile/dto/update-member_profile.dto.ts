import { PartialType } from '@nestjs/mapped-types';
import { CreateMemberProfileDto } from './create-member_profile.dto';

export class UpdateMemberProfileDto extends PartialType(
  CreateMemberProfileDto,
) {
  role: string;
  status: string;
}
