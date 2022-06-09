import { IsEnum, IsNotEmpty } from 'class-validator';

export enum job {
  SUPER_ADMIN = 'SUPER_ADMIN',
  MEMBER = 'MEMBER',
}

export enum stat {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
}

export class CreateMemberProfileDto {
  @IsEnum(job)
  @IsNotEmpty()
  role: string;

  @IsEnum(stat)
  @IsNotEmpty()
  status: string;
}
