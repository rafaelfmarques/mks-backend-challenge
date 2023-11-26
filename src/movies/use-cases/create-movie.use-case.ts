import { Movies } from '@/database/typeorm/entities/movies.entity';
import { CACHE_KEY } from '@/shared/cache_key';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { IMovieRepository } from '../repositories/imovie.repository';

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
