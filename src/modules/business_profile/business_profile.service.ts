import { Injectable } from '@nestjs/common';
import { CreateBusinessProfileDto } from './dto/create-business_profile.dto';
import { UpdateBusinessProfileDto } from './dto/update-business_profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BusinessProfileEntity } from './entities/business_profile.entity';

@Injectable()
export class BusinessProfileService {
  constructor(
    @InjectRepository(BusinessProfileEntity)
    private readonly businessRepository: Repository<BusinessProfileEntity>,
  ) {}
  async createBusiness(businessData: any): Promise<any> {
    const business = await this.businessRepository.create(businessData);
    return await this.businessRepository.save(business);
  }


  async findByName(name: string): Promise<BusinessProfileEntity> {
    return await this.businessRepository.findOne({ where: { name } });
  }

  findAll() {
    return `This action returns all businessProfile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} businessProfile`;
  }

  update(id: number, updateBusinessProfileDto: UpdateBusinessProfileDto) {
    return `This action updates a #${id} businessProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} businessProfile`;
  }
}
