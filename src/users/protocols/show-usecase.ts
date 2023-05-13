import { IUser } from './user';

export interface IShowUser {
  execute(name: string): Promise<IUser>;
}
