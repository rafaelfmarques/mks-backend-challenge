import { Inject, Injectable } from '@nestjs/common';
import { IMovieRepository } from '../repositories/imovie.repository';

@Injectable()
export class FindOneMovieUseCase {
  constructor(
    @Inject('IMoviesRepository')
    private readonly movieRepo: IMovieRepository,
  ) {}

  async execute(id: string) {
    return await this.movieRepo.findById(id);
  }
}
