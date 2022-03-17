import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Name is not a string' })
  name: string;
  email: string;
  password: string;
}
