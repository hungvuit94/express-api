import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

export enum AccountType {
  Bussiness = 'Business',
  Personal = 'Personal',
}
export class CreateTermAndCondDto {
  @IsNotEmpty()
  contentTh: string;

  @IsNotEmpty()
  contentEn: string;

  @IsNotEmpty()
  versionCode: string;

  @IsOptional()
  expressWebVer: string;

  @IsOptional()
  expressAppVer: string;

  @IsNotEmpty()
  @IsEnum(AccountType)
  type: string;

  @IsOptional()
  createDate: Date;

  @IsOptional()
  updateDate: Date;

  // @IsNotEmpty()
  createBy: string;

  @IsOptional()
  updateBy: string;
}
