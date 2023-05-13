import 'reflect-metadata';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'NOW()',
  })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', default: () => 'NOW()' })
  updatedAt: Date;
}
