import { Injectable } from '@nestjs/common';
import { IUser } from '../protocols/user';
import {
  ICreateUserParams,
  IUserRepository,
} from '../protocols/user-repository';
import { UUIDGenerator } from 'src/infra/adapters/uuid-generator.adapter';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly idGeneratorAdapter: UUIDGenerator) {}

  async findAll(): Promise<IUser[]> {
    throw new Error('Method not implemented.');
  }
  async findByName(name: string): Promise<IUser | null> {
    if (name === 'Douglas') {
      return null;
    }
    return {
      name,
      email: 'existingEmail@email.com',
      id: this.idGeneratorAdapter.generate(),
    };
  }
  async create(user: ICreateUserParams): Promise<IUser> {
    return {
      id: this.idGeneratorAdapter.generate(),
      ...user,
    };
  }
}
