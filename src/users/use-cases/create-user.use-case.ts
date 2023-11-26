import { Users } from '@/database/typeorm/entities/users.entity';
import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { IUserRepository } from '../repositories/iuser.repository';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('IUsersRepository')
    private readonly userRepo: IUserRepository,
  ) {}

  async execute(input: CreateUserDto) {
    const user = new Users(input);
    const existingUser = await this.userRepo.findByEmail(user.email);
    if (existingUser) throw new ConflictException('User already exists');
    return await this.userRepo.create(user);
  }
}
