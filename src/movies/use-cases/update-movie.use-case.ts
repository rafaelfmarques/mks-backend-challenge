import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UUID } from 'crypto';
import { IMovieRepository } from '../repositories/imovie.repository';
import { UpdateMovieDto } from '../dto/update-movie.dto';

@Injectable()
export class UpdateMovieUseCase {
  constructor(
    @Inject('IMoviesRepository')
    private readonly movieRepo: IMovieRepository,
  ) {}

  async execute(id: UUID, input: UpdateMovieDto) {
    const existingMovie = await this.movieRepo.findById(id);

    if (!existingMovie) throw new NotFoundException('Movie not found');

    existingMovie.title = input.title ?? existingMovie.title;
    existingMovie.director = input.director ?? existingMovie.director;
    existingMovie.genre = input.genre ?? existingMovie.genre;
    existingMovie.producer = input.producer ?? existingMovie.producer;
    existingMovie.released = input.released ?? existingMovie.released;

    return await this.movieRepo.update(existingMovie);
  }
}
