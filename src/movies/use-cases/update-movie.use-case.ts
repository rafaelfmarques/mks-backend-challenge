import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UUID } from 'crypto';
import { IMovieRepository } from '../repositories/imovie.repository';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { CACHE_KEY } from '@/shared/cache_key';
import { Cache } from 'cache-manager';

@Injectable()
export class UpdateMovieUseCase {
  constructor(
    @Inject('IMoviesRepository')
    private readonly movieRepo: IMovieRepository,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async execute(id: UUID, input: UpdateMovieDto) {
    const existingMovie = await this.movieRepo.findById(id);

    if (!existingMovie) throw new NotFoundException('Movie not found');

    existingMovie.title = input.title ?? existingMovie.title;
    existingMovie.director = input.director ?? existingMovie.director;
    existingMovie.genre = input.genre ?? existingMovie.genre;
    existingMovie.producer = input.producer ?? existingMovie.producer;
    existingMovie.released = input.released ?? existingMovie.released;
    await this.cacheManager.del(CACHE_KEY);
    return await this.movieRepo.update(existingMovie);
  }
}
