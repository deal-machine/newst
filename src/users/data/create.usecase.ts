import { Injectable } from '@nestjs/common';
import { ICreateUser, ICreateUserDTO } from '../protocols/create-usecase';
import { IUser } from '../protocols/user';
import { UserRepository } from '../infra/user.repository';

@Injectable()
export class CreateUser implements ICreateUser {
  constructor(private readonly userRepo: UserRepository) {}

  async execute({ email, name }: ICreateUserDTO): Promise<IUser> {
    const isUserExists = this.userRepo.findByName(name);
    if (isUserExists) return isUserExists;

    const user = this.userRepo.create({ name, email });
    if (!user) {
      throw new Error('Cannot Create User');
    }
    return user;
  }
}
