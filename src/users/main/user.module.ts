import { Module } from '@nestjs/common';
import { UserController } from '../presentation/user.controller';
import { CreateUser } from '../data/create.usecase';
import { ShowUser } from '../data/show.usecase';
import { UserRepository } from '../infra/user.repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [CreateUser, ShowUser, UserRepository],
})
export class UserModule {}
