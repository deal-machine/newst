import { ICreateUserDTO } from './create-usecase';
import { IUser } from './user';

export type ICreateUserParams = ICreateUserDTO;

export interface IUserRepository {
  findAll(): Promise<IUser[]>;
  findById(id: number): Promise<IUser | null>;
  create(user: ICreateUserParams): Promise<IUser>;
}
