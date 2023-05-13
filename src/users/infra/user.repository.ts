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
  async findByName(name: string): Promise<IUser> {
    if (name === 'Douglas') {
      return {
        name,
        email: 'existingEmail@email.com',
        id: 'ahsuisghiusjadpa',
      };
    }
    return {
      name,
      email: 'notExisting@email.com',
      id: 'ahsuisghiusjadpa',
    };
  }
  async create(user: ICreateUserParams): Promise<IUser> {
    return {
      id: 'asdhiudfhisfygihjasdpl',
      ...user,
    };
  }
}
