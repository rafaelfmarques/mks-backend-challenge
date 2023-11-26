import { Movies } from '@/database/typeorm/entities/movies.entity';
import { Inject, Injectable } from '@nestjs/common';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { IMovieRepository } from '../repositories/imovie.repository';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { CACHE_KEY } from '@/shared/cache_key';
import { Cache } from 'cache-manager';

@Injectable()
export class CreateMovieUseCase {
  constructor(
    @Inject('IMoviesRepository')
    private readonly movieRepo: IMovieRepository,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async execute(input: CreateMovieDto) {
    const movie = new Movies(input);
    await this.cacheManager.del(CACHE_KEY);

    return await this.movieRepo.create(movie);
  }
}
