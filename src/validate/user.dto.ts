import { IsEmail, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

// validate 为接受字段校验器
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  @IsString()
  email: string;
}
