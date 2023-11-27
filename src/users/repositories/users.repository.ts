import { Users } from '@/database/typeorm/entities/users.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { IUserRepository } from './iuser.repository';

@Injectable()
export class UserTypeOrmRepository implements IUserRepository {
  constructor(
    @InjectRepository(Users)
    private typeOrmRepo: Repository<Users>,
  ) {}

  async create(entity: Users): Promise<Users> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(entity.password, saltOrRounds);

    return await this.typeOrmRepo.save({ ...entity, password: hash });
  }

  async update(entity: Users): Promise<void> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(entity.password, saltOrRounds);

    await this.typeOrmRepo.update(entity.id, { ...entity, password: hash });
  }

  async findAll(): Promise<Users[]> {
    return this.typeOrmRepo.find();
  }

  async findById(id: string): Promise<Users | null> {
    const user = await this.typeOrmRepo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async delete(id: string): Promise<void> {
    await this.typeOrmRepo.delete(id);
  }

  async findByEmail(email: string) {
    return await this.typeOrmRepo.findOne({ where: { email } });
  }
}
