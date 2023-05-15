import { Injectable } from '@nestjs/common';
import { ICreateUser, ICreateUserDTO } from '../protocols/create-usecase';
import { UserRepository } from '../infra/user.repository';
import { IUser } from '../../domain/User';

@Injectable()
export class CreateUser implements ICreateUser {
  constructor(private readonly userRepo: UserRepository) {}

  async execute({ email, name }: ICreateUserDTO): Promise<IUser> {
    const isUserExists = await this.userRepo.findByName(name);
    if (isUserExists) return isUserExists;

    const user = await this.userRepo.create({ name, email });
    if (!user) {
      throw new Error('Cannot Create User');
    }
    return user;
  }
}
