// import { IMovieRepository } from '@/movies/repository/movies.repository';
// import { Inject } from '@nestjs/common';

// @Injectable()
// export class CreateUserUseCase {
//   constructor(
//     @Inject('IMovieRepository')
//     private readonly projectRepo: IMovieRepository,
//   ) {}

//   async execute(input: CreateProjectDto) {
//     const project = new Projects(input);
//     await this.projectRepo.create(project);
//     return project;
//   }
// }
