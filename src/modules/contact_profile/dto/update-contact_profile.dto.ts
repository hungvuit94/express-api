import { PartialType } from '@nestjs/mapped-types';
import { CreateContactProfileDto } from './create-contact_profile.dto';

export class UpdateContactProfileDto extends PartialType(
  CreateContactProfileDto,
) {
  name: string;

  lastName: string;

  tel: string;

  email: string;
}
