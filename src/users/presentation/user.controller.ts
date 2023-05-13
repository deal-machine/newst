import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUser } from '../data/create.usecase';
import { IUser } from '../protocols/user';
import { ShowUser } from '../data/show.usecase';
import { CreateUserParams } from './user.dto';

@Controller('/users')
export class UserController {
  constructor(private createUser: CreateUser, private showUser: ShowUser) {}

  @Post()
  async create(@Body() user: CreateUserParams): Promise<IUser> {
    return this.createUser.execute(user);
  }

  @Get('/:name')
  async show(@Param() { name }: { name: string }): Promise<any> {
    try {
      const user = await this.showUser.execute(name);
      return user;
    } catch (err: any) {
      return {
        error: err.message,
      };
    }
  }
}
