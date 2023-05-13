import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { ICreateUserDTO } from '../protocols/create-usecase';
import { UserAlreadyExists } from './user-already-exists.validator';

export class CreateUserParams implements ICreateUserDTO {
  @UserAlreadyExists({ message: 'Name already exists' })
  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @Length(1, 100)
  email: string;
}
export class ShowUserParams {
  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  name: string;
}
