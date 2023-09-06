import { IsString, IsNumber, IsDate } from 'class-validator';

export class CreateDomainDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly appraisedValue: number;

  @IsDate()
  readonly lastAppraisedAt: Date;
}
