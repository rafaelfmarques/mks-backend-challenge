import { ObjectLiteral, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UUID } from 'crypto';
import { IRepository } from './irepository.interface';

@Injectable()
export class TypeOrmRepository<T extends ObjectLiteral>
  implements IRepository<T>
{
  constructor(private typeOrmRepo: Repository<T>) {}

  async create(entity: T): Promise<void> {
    await this.typeOrmRepo.save(entity);
  }

  async update(entity: T): Promise<void> {
    await this.typeOrmRepo.update((entity as any).id, entity);
  }

  async findAll(): Promise<T[]> {
    return this.typeOrmRepo.find();
  }

  async findById(id: UUID): Promise<T> {
    return this.typeOrmRepo.findOneOrFail(id as any);
  }

  async delete(id: UUID): Promise<void> {
    await this.typeOrmRepo.delete(id);
  }
}
