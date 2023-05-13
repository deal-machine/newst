import { ICreateUserDTO } from './create-usecase';
import { IUser } from './user';

export type ICreateUserParams = ICreateUserDTO;

export interface IUserRepository {
  findAll(): Promise<IUser[]>;
  findByName(name: string): Promise<IUser | null>;
  create(user: ICreateUserParams): Promise<IUser>;
}
