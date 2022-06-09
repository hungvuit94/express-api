import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  Length,
  MaxLength,
} from 'class-validator';
import { genderValue } from '../../auth/dto/registration-otp-mobile-validation.dto';

export enum accStatus {
  APPSUBMITTED = 'Application submitted',
  PENDING = 'Pending for approval',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
}

export enum Status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export class CreateBusinessProfileDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  tel: string;

  @IsOptional()
  taxNo: number;

  @IsEnum(Status)
  @IsOptional()
  status: string;

  @IsNotEmpty()
  @IsEnum(accStatus)
  accountStatus;

  @IsOptional()
  imagePath: string;

  @IsOptional()
  typeId: string;
}
