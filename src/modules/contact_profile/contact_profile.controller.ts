import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContactProfileService } from './contact_profile.service';
import { CreateContactProfileDto } from './dto/create-contact_profile.dto';
import { UpdateContactProfileDto } from './dto/update-contact_profile.dto';

@Controller('contact-profile')
export class ContactProfileController {
  constructor(private readonly contactProfileService: ContactProfileService) {}

  @Post()
  create(@Body() createContactProfileDto: CreateContactProfileDto) {
    return this.contactProfileService.create(createContactProfileDto);
  }

  @Get()
  findAll() {
    return this.contactProfileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactProfileService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateContactProfileDto: UpdateContactProfileDto,
  ) {
    return this.contactProfileService.update(+id, updateContactProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactProfileService.remove(+id);
  }
}
