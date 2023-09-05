import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { PlanType } from 'src/types/plan-type.enum';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(PlanType)
  plan: string;
}
