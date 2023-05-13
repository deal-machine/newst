import { Injectable } from '@nestjs/common';
import { IShowUser } from '../protocols/show-usecase';
import { IUser } from '../protocols/user';
import { UserRepository } from '../infra/user.repository';

@Injectable()
export class ShowUser implements IShowUser {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(name: string): Promise<IUser> {
    const user = await this.userRepo.findByName(name);
    if (!user) throw new Error('User not exists');

    return user;
  }
}
