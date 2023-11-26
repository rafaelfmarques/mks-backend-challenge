import { Movies } from '@/database/typeorm/entities/movies.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { MovieTypeOrmRepository } from './repositories/movies.repository';
import { CreateMovieUseCase } from './use-cases/create-movie.use-case';
import { DeleteMovieUseCase } from './use-cases/delete-movie.use-case';
import { FindAllMoviesUseCase } from './use-cases/find-all-movie.use-case';
import { FindOneMovieUseCase } from './use-cases/find-one-movie.use-case';
import { UpdateMovieUseCase } from './use-cases/update-movie.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([Movies])],
  controllers: [MoviesController],
  providers: [
    MoviesService,
    CreateMovieUseCase,
    FindAllMoviesUseCase,
    FindOneMovieUseCase,
    UpdateMovieUseCase,
    DeleteMovieUseCase,
    MovieTypeOrmRepository,
    {
      provide: 'IMoviesRepository',
      useExisting: MovieTypeOrmRepository,
    },
  ],
})
export class MoviesModule {}
