import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Rafael', required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'mks@mks.com', required: true })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'Teste@123', required: true })
  @IsString()
  @IsNotEmpty()
  password: string;
}
