import { IUser } from '../../domain/User';

export interface IListUsers {
  execute(): Promise<IUser[]>;
}
