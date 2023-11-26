import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { FindOneUserUseCase } from './use-cases/find-one.use-case';
import { UUID } from 'crypto';
import { DeleteUserUseCase } from './use-cases/delete-user.use-case';
import { UpdateUserUseCase } from './use-cases/update-user.use-case';

@Injectable()
export class UsersService {
  @Inject(CreateUserUseCase)
  private readonly createUserUseCase: CreateUserUseCase;

  @Inject(FindOneUserUseCase)
  private readonly findOneUserUseCase: FindOneUserUseCase;

  @Inject(DeleteUserUseCase)
  private readonly deleteUserUseCase: DeleteUserUseCase;

  @Inject(UpdateUserUseCase)
  private readonly updateUserUseCase: UpdateUserUseCase;

  create(createUserDto: CreateUserDto) {
    return this.createUserUseCase.execute(createUserDto);
  }

  findOne(id: UUID) {
    return this.findOneUserUseCase.execute(id);
  }

  async update(id: UUID, updateUserDto: UpdateUserDto) {
    return await this.updateUserUseCase.execute(id, updateUserDto);
  }

  remove(id: UUID) {
    return this.deleteUserUseCase.execute(id);
  }
}
