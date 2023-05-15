import { Injectable } from '@nestjs/common';
import { IListUsers } from '../protocols/list-usecase';
import { IUser } from 'src/domain/User';
import { UserRepository } from '../infra/user.repository';

@Injectable()
export class ListUsers implements IListUsers {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(): Promise<IUser[]> {
    const users = await this.userRepo.findAll();

    return users;
  }
}
