import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { ICreateUserDTO } from '../protocols/create-usecase';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserParams implements ICreateUserDTO {
  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @Length(1, 100)
  email: string;
}