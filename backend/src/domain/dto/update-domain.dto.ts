import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional, IsDate } from 'class-validator';
import { CreateDomainDto } from './create-domain.dto';

export class UpdateDomainDto extends PartialType(CreateDomainDto) {
  @IsNumber()
  @IsOptional()
  readonly appraisedValue?: number;

  @IsNumber()
  @IsOptional()
  readonly rating?: number;

  @IsDate()
  @IsOptional()
  readonly lastAppraisedAt?: Date;
}
