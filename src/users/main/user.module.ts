import { Module } from '@nestjs/common';
import { UserController } from '../presentation/user.controller';
import { CreateUser } from '../data/create.usecase';
import { ShowUser } from '../data/show.usecase';
import { UserRepository } from '../infra/user.repository';
import { UserAlreadyExistsValidator } from '../presentation/user-already-exists.validator';
import { UUIDGenerator } from 'src/infra/adapters/uuid-generator.adapter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/infra/database/typeorm/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    CreateUser,
    ShowUser,
    UserRepository,
    UserAlreadyExistsValidator,
    UUIDGenerator,
  ],
})
export class UserModule {}
