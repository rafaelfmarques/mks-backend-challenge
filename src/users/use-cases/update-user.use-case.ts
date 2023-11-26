import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UUID } from 'crypto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { IUserRepository } from '../repositories/iuser.repository';

@Injectable()
export class UpdateUserUseCase {
  constructor(
    @Inject('IUsersRepository')
    private readonly userRepo: IUserRepository,
  ) {}

  async execute(id: UUID, input: UpdateUserDto) {
    const existingUser = await this.userRepo.findById(id);

    if (!existingUser) throw new NotFoundException('User not found');

    existingUser.name = input.name ?? existingUser.name;
    existingUser.email = input.email ?? existingUser.email;
    existingUser.password = input.password ?? existingUser.password;

    return await this.userRepo.update(existingUser);
  }
}
