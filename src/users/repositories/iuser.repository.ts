import { Users } from '@/database/typeorm/entities/users.entity';
import { UUID } from 'crypto';

export interface IUserRepository {
  create(entity: Users): Promise<Users>;
  update(entity: Users): Promise<void>;
  findById(id: UUID): Promise<Users | null>;
  findByEmail(email: string): Promise<Users | null>;
  delete(id: UUID): Promise<void>;
}
