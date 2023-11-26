import { Movies } from '@/database/typeorm/entities/movies.entity';
import { Inject, Injectable } from '@nestjs/common';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { IMovieRepository } from '../repositories/imovie.repository';

@Injectable()
export class CreateMovieUseCase {
  constructor(
    @Inject('IMoviesRepository')
    private readonly movieRepo: IMovieRepository,
  ) {}

  async execute(input: CreateMovieDto) {
    const movie = new Movies(input);

    return await this.movieRepo.create(movie);
  }
}
