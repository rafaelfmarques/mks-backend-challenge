import { CACHE_KEY } from '@/shared/cache_key';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { IMovieRepository } from '../repositories/imovie.repository';

@Injectable()
export class UpdateMovieUseCase {
  constructor(
    @Inject('IMoviesRepository')
    private readonly movieRepo: IMovieRepository,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async execute(id: string, input: UpdateMovieDto) {
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
