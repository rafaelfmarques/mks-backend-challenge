import { Inject, Injectable } from '@nestjs/common';
import { UUID } from 'crypto';
import { IMovieRepository } from '../repositories/imovie.repository';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { CACHE_KEY } from '@/shared/cache_key';

@Injectable()
export class DeleteMovieUseCase {
  constructor(
    @Inject('IMoviesRepository')
    private readonly movieRepo: IMovieRepository,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async execute(id: UUID) {
    await this.cacheManager.del(CACHE_KEY);
    return await this.movieRepo.delete(id);
  }
}
