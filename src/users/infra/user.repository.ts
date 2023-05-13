import { Injectable } from '@nestjs/common';
import {
  ICreateUserParams,
  IUserRepository,
} from '../protocols/user-repository';
import { UUIDGenerator } from 'src/infra/adapters/uuid-generator.adapter';
import { IUser } from '../../domain/User';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../infra/database/typeorm/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
    private readonly idGeneratorAdapter: UUIDGenerator,
  ) {}

  async findAll(): Promise<IUser[]> {
    return this.repository.find();
  }
  async findByName(name: string): Promise<IUser | null> {
    return this.repository.findOne({ where: { name } });
  }
  async create({ email, name }: ICreateUserParams): Promise<IUser> {
    const user = this.repository.create({
      id: this.idGeneratorAdapter.generate(),
      name,
      email,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    await this.repository.save(user);
    return user;
  }
}
