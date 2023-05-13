import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'newst_database',
  entities: ['./src/infra/database/typeorm/entities/*{.ts,.js}'],
  migrations: ['./src/infra/database/typeorm/migrations/*{.ts,.js}'],
  logging: true,
  migrationsTableName: 'migrations',
  migrationsTransactionMode: 'each',
};
export const dataSource: DataSource = new DataSource(dataSourceOptions);
