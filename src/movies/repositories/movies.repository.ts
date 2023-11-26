import { Movies } from '@/database/typeorm/entities/movies.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IMovieRepository } from './imovie.repository';
import { UUID } from 'crypto';

@Injectable()
export class MovieTypeOrmRepository implements IMovieRepository {
  constructor(
    @InjectRepository(Movies)
    private typeOrmRepo: Repository<Movies>,
  ) {}

  async create(entity: Movies): Promise<Movies> {
    return await this.typeOrmRepo.save(entity);
  }
  async update(entity: Movies): Promise<void> {
    await this.typeOrmRepo.update(entity.id, entity);
  }
  async findAll(): Promise<Movies[]> {
    return await this.typeOrmRepo.find();
  }
  async findById(id: UUID): Promise<Movies | null> {
    const movie = await this.typeOrmRepo.findOne({ where: { id } });
    if (!movie) throw new NotFoundException('Movie not found');
    return movie;
  }
  async delete(id: UUID): Promise<void> {
    await this.typeOrmRepo.delete(id);
  }
}
