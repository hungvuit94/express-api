import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Headers,
} from '@nestjs/common';
import { TermAndCondService } from './term-and-cond.service';
import { CreateTermAndCondDto } from './dto/create-term-and-cond.dto';
import { createCipheriv, randomBytes } from 'crypto';
import { TermAndCondEntity } from './entities/term-and-cond.entity';
import { I18n, I18nContext } from 'nestjs-i18n';

@Controller('onboarding/termAndCond')
export class TermAndCondController {
  constructor(private readonly termAndCondService: TermAndCondService) {}

  @Post()
  async create(@Body() data: CreateTermAndCondDto): Promise<TermAndCondEntity> {
    const newTermAndCond = await this.termAndCondService.create(data);
    return newTermAndCond;
  }

  @Get()
  async findByVer(
    @I18n() i18n: I18nContext,
    @Query('version') version: string,
  ): Promise<
    | string
    | {
        resultCode: number;
        status: string;
        errorMessage: string;
      }
  > {
    const termAndCond = await this.termAndCondService.findByVer(version);
    if (!termAndCond) {
      return {
        resultCode: 1001,
        status: 'FAILED',
        errorMessage: await i18n.t(
          'translation.authentication_mobile_validation_1001',
        ),
      };
    }
    const secretKey = process.env.AES_256_SECRET;
    const IV = randomBytes(16);
    const result = {
      resultCode: 1000,
      status: 'SUCCESSFUL',
      errorMessage: null,
      data: {
        termAndCondId: termAndCond.id,
        termAndCondContent: termAndCond.contentTh,
        termAndCondVersionCode: termAndCond.versionCode,
      },
    };
    const cipher = createCipheriv('aes-256-cbc', String(secretKey), IV);
    const encryptedData = Buffer.concat([
      cipher.update(JSON.stringify(result)),
      cipher.final(),
    ]);
    return encryptedData.toString('base64');
  }

  @Get()
  async findAll(): Promise<TermAndCondEntity[]> {
    return await this.termAndCondService.findAll();
  }
}
