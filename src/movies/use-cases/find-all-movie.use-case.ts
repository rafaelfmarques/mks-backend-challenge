import { Inject, Injectable } from '@nestjs/common';
import { IMovieRepository } from '../repositories/imovie.repository';

@Injectable()
export class FindAllMoviesUseCase {
  constructor(
    @Inject('IMoviesRepository')
    private readonly movieRepo: IMovieRepository,
  ) {}

  async execute() {
    return await this.movieRepo.findAll();
  }
}
