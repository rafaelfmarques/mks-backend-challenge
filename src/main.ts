import dotenv = require('dotenv');
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { createDocument } from './swagger/swagger';
import { env } from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  createDocument(app);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
