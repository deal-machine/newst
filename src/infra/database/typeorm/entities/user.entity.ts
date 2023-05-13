import 'reflect-metadata';
import { Entity, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @Column({ name: 'name', type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({
    unique: true,
    name: 'email',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  email: string;

  @Column({
    primary: true,
    unique: true,
    name: 'id',
    type: 'uuid',
    nullable: false,
  })
  id: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;
}
