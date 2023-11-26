import { Inject, Injectable } from '@nestjs/common';
import { UUID } from 'crypto';
import { IUserRepository } from '../repositories/iuser.repository';

@Injectable()
export class DeleteUserUseCase {
  constructor(
    @Inject('IUsersRepository')
    private readonly userRepo: IUserRepository,
  ) {}

  async execute(id: UUID) {
    return await this.userRepo.delete(id);
  }
}
