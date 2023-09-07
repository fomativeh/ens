import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePlanDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  maxSearches: number;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
