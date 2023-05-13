import { IUser } from '../../domain/User';

export interface IShowUser {
  execute(name: string): Promise<IUser>;
}
