import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUser, ListUsers, ShowUser } from '../data';
import { CreateUserParams, ShowUserParams } from './user.validation';

@Controller('/users')
export class UserController {
  constructor(
    private createUser: CreateUser,
    private showUser: ShowUser,
    private listUsers: ListUsers,
  ) {}

  @Post()
  async create(@Body() user: CreateUserParams): Promise<any> {
    try {
      const result = await this.createUser.execute(user);
      return result;
    } catch (err: any) {
      return {
        error: err.message,
      };
    }
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

  @Get()
  async list(): Promise<any> {
    try {
      const users = await this.listUsers.execute();
      return users;
    } catch (err: any) {
      return {
        error: err.message,
      };
    }
  }
}
