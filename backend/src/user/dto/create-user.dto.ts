import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  readonly firstname: string;

  @ApiProperty()
  @IsString()
  readonly lastname: string;

  @ApiProperty()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @IsString()
  @MinLength(8)
  readonly password: string;

  @ApiProperty()
  @IsBoolean()
  readonly isAdmin: boolean;
}
