import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateUser } from './users/data/create.usecase';
import { UserRepository } from './users/infra/user.repository';
import { UserController } from './users/presentation/user.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, CreateUser, UserRepository],
})
export class AppModule {}
