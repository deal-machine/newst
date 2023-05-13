import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUser } from '../data/create.usecase';
import { ShowUser } from '../data/show.usecase';
import { CreateUserParams, ShowUserParams } from './user.validation';
import { IUser } from '../../domain/User';

@Controller('/users')
export class UserController {
  constructor(private createUser: CreateUser, private showUser: ShowUser) {}

  @Post()
  async create(@Body() user: CreateUserParams): Promise<IUser> {
    const result = await this.createUser.execute(user);
    console.log(result);
    return result;
  }

  @Get('/:name')
  async show(@Param() { name }: ShowUserParams): Promise<any> {
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
