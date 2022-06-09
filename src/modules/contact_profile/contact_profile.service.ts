import { Injectable } from '@nestjs/common';
import { CreateContactProfileDto } from './dto/create-contact_profile.dto';
import { UpdateContactProfileDto } from './dto/update-contact_profile.dto';

@Injectable()
export class ContactProfileService {
  create(createContactProfileDto: CreateContactProfileDto) {
    return 'This action adds a new contactProfile';
  }

  findAll() {
    return `This action returns all contactProfile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contactProfile`;
  }

  update(id: number, updateContactProfileDto: UpdateContactProfileDto) {
    return `This action updates a #${id} contactProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactProfile`;
  }
}
