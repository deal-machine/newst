import { v4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { IIdGeneratorAdapter } from '../protocols/id-generator.adapter';

@Injectable()
export class UUIDGenerator implements IIdGeneratorAdapter {
  generate(): string {
    return v4();
  }
}
