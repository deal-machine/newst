import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/main/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './infra/database/typeorm/postgres.config.service';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from './infra/database/typeorm/datasource.config';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
