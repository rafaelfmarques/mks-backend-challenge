import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { Public } from './utils/constants';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @ApiOperation({ summary: 'Login' })
  @ApiTags('AUTH')
  @ApiBody({ type: LoginDTO })
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() dto: LoginDTO) {
    return this.authService.signIn(dto);
  }
}
