import { Inject, Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { FindAllMoviesUseCase } from './use-cases/find-all-movie.use-case';
import { CreateMovieUseCase } from './use-cases/create-movie.use-case';
import { FindOneMovieUseCase } from './use-cases/find-one-movie.use-case';
import { DeleteMovieUseCase } from './use-cases/delete-movie.use-case';
import { UpdateMovieUseCase } from './use-cases/update-movie.use-case';
import { UUID } from 'crypto';

@Injectable()
export class MoviesService {
  @Inject(CreateMovieUseCase)
  private readonly createMovieUseCase: CreateMovieUseCase;

  @Inject(FindAllMoviesUseCase)
  private readonly findAllMoviesUseCase: FindAllMoviesUseCase;

  @Inject(FindOneMovieUseCase)
  private readonly findOneMovieUseCase: FindOneMovieUseCase;

  @Inject(DeleteMovieUseCase)
  private readonly deleteMovieUseCase: DeleteMovieUseCase;

  @Inject(UpdateMovieUseCase)
  private readonly updateUserUseCase: UpdateMovieUseCase;

  async create(createMovieDto: CreateMovieDto) {
    return await this.createMovieUseCase.execute(createMovieDto);
  }

  async findAll() {
    return await this.findAllMoviesUseCase.execute();
  }

  async findOne(id: UUID) {
    return await this.findOneMovieUseCase.execute(id);
  }

  async update(id: UUID, updateMovieDto: UpdateMovieDto) {
    return await this.updateUserUseCase.execute(id, updateMovieDto);
  }

  async remove(id: UUID) {
    return await this.deleteMovieUseCase.execute(id);
  }
}
