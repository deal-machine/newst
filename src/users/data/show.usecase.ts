import { Injectable } from '@nestjs/common';
import { IShowUser } from '../protocols/show-usecase';
import { UserRepository } from '../infra/user.repository';
import { IUser } from '../../domain/User';

@Injectable()
export class ShowUser implements IShowUser {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(name: string): Promise<IUser> {
    const user = await this.userRepo.findByName(name);
    if (!user) throw new Error('User not exists');

    return user;
  }
}
