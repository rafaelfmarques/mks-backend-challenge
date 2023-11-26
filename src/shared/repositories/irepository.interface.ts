import { UUID } from 'crypto';

export interface IRepository<T> {
  create(entity: T): Promise<void>;
  update(entity: T): Promise<void>;
  findAll(): Promise<T[]>;
  findById(id: UUID): Promise<T>;
  delete(id: UUID): Promise<void>;
}
