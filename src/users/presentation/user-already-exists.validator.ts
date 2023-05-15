import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { UserRepository } from '../infra/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class UserAlreadyExistsValidator
  implements ValidatorConstraintInterface
{
  constructor(private readonly userRepo: UserRepository) {}

  async validate(value: string): Promise<boolean> {
    const userAlreadyExists = await this.userRepo.findByName(value);
    return !userAlreadyExists;
  }
}

export const UserAlreadyExists =
  (options: ValidationOptions) => (object: Object, props: string) => {
    registerDecorator({
      validator: UserAlreadyExistsValidator,
      constraints: [],
      options,
      propertyName: props,
      target: object.constructor,
    });
  };
