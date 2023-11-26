import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  director: string;

  @IsString()
  @IsNotEmpty()
  producer: string;

  @IsDateString()
  @IsNotEmpty()
  released: Date;

  @IsString()
  @IsNotEmpty()
  genre: string;
}
