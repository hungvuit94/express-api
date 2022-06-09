import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateContactProfileDto {
  @IsOptional()
  name: string;

  @IsOptional()
  lastName: string;

  @IsOptional()
  tel: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
