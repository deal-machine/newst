import { IUser } from '../../domain/User';

export type ICreateUserDTO = Omit<IUser, 'id'>;

export interface ICreateUser {
  execute({ email, name }: ICreateUserDTO): Promise<IUser>;
}
