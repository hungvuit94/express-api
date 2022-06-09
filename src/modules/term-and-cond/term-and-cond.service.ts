import { Injectable } from '@nestjs/common';
import { TermAndCondEntity } from './entities/term-and-cond.entity';
import { CreateTermAndCondDto } from './dto/create-term-and-cond.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TermAndCondService {
  constructor(
    @InjectRepository(TermAndCondEntity)
    private readonly termAndCondRepository: Repository<TermAndCondEntity>,
  ) {}

  async doesVersionExist(versionCode: string) {
    const termAndCond = await this.termAndCondRepository.findOne({
      versionCode,
    });
    if (termAndCond) {
      return true;
    }
    return false;
  }

  async create(data: CreateTermAndCondDto): Promise<TermAndCondEntity> {
    const termAndCond = await this.termAndCondRepository.create(data);
    return await this.termAndCondRepository.save(termAndCond);
  }

  async findByVer(versionCode: string): Promise<TermAndCondEntity> {
    return await TermAndCondEntity.findOne({
      where: { versionCode },
    });
  }

  async findAll(): Promise<TermAndCondEntity[]> {
    return await this.termAndCondRepository.find();
  }
}
