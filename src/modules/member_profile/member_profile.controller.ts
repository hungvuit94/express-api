import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MemberProfileService } from './member_profile.service';
import { CreateMemberProfileDto } from './dto/create-member_profile.dto';
import { UpdateMemberProfileDto } from './dto/update-member_profile.dto';

@Controller('member-profile')
export class MemberProfileController {
  constructor(private readonly memberProfileService: MemberProfileService) {}

  @Post()
  create(@Body() createMemberProfileDto: CreateMemberProfileDto) {
    return this.memberProfileService.create(createMemberProfileDto);
  }

  @Get()
  findAll() {
    return this.memberProfileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memberProfileService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMemberProfileDto: UpdateMemberProfileDto,
  ) {
    return this.memberProfileService.update(+id, updateMemberProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memberProfileService.remove(+id);
  }
}
