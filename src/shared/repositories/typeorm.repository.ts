import { UUID } from 'crypto';
import { Connection, EntityTarget, ObjectLiteral, Repository } from 'typeorm';
import { IRepository } from './irepository.interface';

export class TypeOrmRepository<T extends ObjectLiteral>
  implements IRepository<T>
{
  private typeOrmRepo: Repository<T>;

  constructor(connection: Connection, repo: EntityTarget<T>) {
    this.typeOrmRepo = connection?.getRepository<T>(repo);
  }

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
