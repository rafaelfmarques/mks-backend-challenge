import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateMovieDto {
  @ApiProperty({ example: 'The Dark Knight', required: true })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Christopher Nolan', required: true })
  @IsString()
  @IsNotEmpty()
  director: string;

  @ApiProperty({ example: 'Warner Bros Entertainment', required: true })
  @IsString()
  @IsNotEmpty()
  producer: string;

  @ApiProperty({ example: '2008-07-18', required: true })
  @IsDateString()
  @IsNotEmpty()
  released: Date;

  @ApiProperty({ example: 'Action', required: true })
  @IsString()
  @IsNotEmpty()
  genre: string;
}
