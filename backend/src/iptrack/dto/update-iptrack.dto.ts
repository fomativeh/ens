import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsOptional, IsDate } from 'class-validator';
import { CreateIptrackDto } from './create-iptrack.dto';

export class UpdateIptrackDto extends PartialType(CreateIptrackDto) {
  @IsDate()
  @IsOptional()
  readonly lastSearchAt?: Date;
}
