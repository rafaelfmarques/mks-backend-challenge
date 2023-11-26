import { Users } from '@/database/typeorm/entities/users.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTypeOrmRepository } from './repositories/users.repository';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { DeleteUserUseCase } from './use-cases/delete-user.use-case';
import { FindOneUserUseCase } from './use-cases/find-one.use-case';
import { UpdateUserUseCase } from './use-cases/update-user.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [
    UsersService,
    CreateUserUseCase,
    DeleteUserUseCase,
    FindOneUserUseCase,
    UpdateUserUseCase,
    UserTypeOrmRepository,
    {
      provide: 'IUsersRepository',
      useExisting: UserTypeOrmRepository,
    },
  ],
})
export class UsersModule {}
