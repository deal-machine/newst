import { Injectable } from '@nestjs/common';
import { IUser } from '../protocols/user';
import {
  ICreateUserParams,
  IUserRepository,
} from '../protocols/user-repository';

@Injectable()
export class UserRepository implements IUserRepository {
  async findAll(): Promise<IUser[]> {
    throw new Error('Method not implemented.');
  }
  async findById(id: number): Promise<IUser> {
    throw new Error('Method not implemented.');
  }
  async create(user: ICreateUserParams): Promise<IUser> {
    return {
      id: 'asdhiudfhisfygihjasdpl',
      ...user,
    };
  }
}
