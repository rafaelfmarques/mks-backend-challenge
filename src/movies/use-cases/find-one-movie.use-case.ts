import { Inject, Injectable } from '@nestjs/common';
import { UUID } from 'crypto';
import { IMovieRepository } from '../repositories/imovie.repository';

@Injectable()
export class FindOneMovieUseCase {
  constructor(
    @Inject('IMoviesRepository')
    private readonly movieRepo: IMovieRepository,
  ) {}

  async execute(id: UUID) {
    return await this.movieRepo.findById(id);
  }
}
