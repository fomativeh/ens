import { IsString, IsInt, IsOptional, IsDate } from 'class-validator';

export class CreateIptrackDto {
  @IsString()
  readonly ip: string;

  //   @IsInt()
  //   @IsOptional()
  //   readonly searchCount?: number;

  @IsDate()
  @IsOptional()
  readonly lastSearchAt?: Date;
}
