import { PartialType } from '@nestjs/mapped-types';
import { CreateTermAndCondDto } from './create-term-and-cond.dto';

export class UpdateTermAndCondDto extends PartialType(CreateTermAndCondDto) {
  contentTh: string;

  contentEn: string;

  versionCode: string;

  expressWebVer: string;

  expressAppVer: string;

  type: string;
}
