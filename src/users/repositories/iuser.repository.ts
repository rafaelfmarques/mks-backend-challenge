import { Users } from '@/database/typeorm/entities/users.entity';

export interface IUserRepository {
  create(entity: Users): Promise<Users>;
  update(entity: Users): Promise<void>;
  findById(id: string): Promise<Users | null>;
  findByEmail(email: string): Promise<Users | null>;
  delete(id: string): Promise<void>;
}
