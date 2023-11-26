import { Movies } from '@/database/typeorm/entities/movies.entity';
import { UUID } from 'crypto';

export interface IMovieRepository {
  create(entity: Movies): Promise<Movies>;
  update(entity: Movies): Promise<void>;
  findAll(): Promise<Movies[]>;
  findById(id: UUID): Promise<Movies | null>;
  delete(id: UUID): Promise<void>;
}
