import { Movies } from '@/database/typeorm/entities/movies.entity';

export interface IMovieRepository {
  create(entity: Movies): Promise<Movies>;
  update(entity: Movies): Promise<void>;
  findAll(): Promise<Movies[]>;
  findById(id: string): Promise<Movies | null>;
  delete(id: string): Promise<void>;
}
