import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsOptional, IsDate } from 'class-validator';

export class CreateIptrackDto {
  @ApiProperty()
  @IsString()
  readonly domain: string;

  //   @IsInt()
  //   @IsOptional()
  //   readonly searchCount?: number;

  // @IsDate()
  // @IsOptional()
  // readonly lastSearchAt?: Date;
}
