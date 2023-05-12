import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUser } from '../data/create.usecase';
import { ICreateUserDTO } from '../protocols/create-usecase';
import { IUser } from '../protocols/user';

@Controller('/users')
export class UserController {
  constructor(private createUser: CreateUser) {}

  @Post()
  async create(@Body() user: ICreateUserDTO): Promise<IUser> {
    return this.createUser.execute(user);
  }
}
