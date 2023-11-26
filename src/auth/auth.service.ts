import { UserTypeOrmRepository } from '@/users/repositories/users.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDTO } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserTypeOrmRepository,
    private jwtService: JwtService,
  ) {}

  async signIn(dto: LoginDTO) {
    const user = await this.userRepository.findByEmail(dto.email);
    const saltOrRounds = 10;

    if (!user) throw new UnauthorizedException('User not found');

    const isPasswordOk = await bcrypt.compare(dto.password, user.password);

    if (!isPasswordOk)
      throw new UnauthorizedException('Incorrect username or password');

    const payload = { sub: user.id, email: user.email, name: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
