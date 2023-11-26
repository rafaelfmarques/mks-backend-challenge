import { Inject, Injectable } from '@nestjs/common';
import { IMovieRepository } from '../repositories/imovie.repository';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { CACHE_KEY } from '@/shared/cache_key';

@Injectable()
export class FindAllMoviesUseCase {
  constructor(
    @Inject('IMoviesRepository')
    private readonly movieRepo: IMovieRepository,

    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async execute() {
    let movies = await this.cacheManager.get(CACHE_KEY);
    if (!movies) {
      movies = await this.movieRepo.findAll();
      await this.cacheManager.set(CACHE_KEY, movies, { ttl: 60 });
    }
    return movies;
  }
}
