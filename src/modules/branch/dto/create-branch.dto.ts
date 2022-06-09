import { IsNotEmpty } from 'class-validator';

export class CreateBranchDto {
  @IsNotEmpty()
  branchNo: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  status: string;
}
