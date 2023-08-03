import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import * as cookieParser from 'cookie-parser';

import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';
import { join } from 'path';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  // Configurar la carpeta "public" como directorio estático para servir los archivos React
  console.log("join: ", join(__dirname, '..', 'public'));
  app.use(express.static(join(__dirname, '..', 'public')));


  
  app.use(cookieParser());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  //habilitar cors
  app.enableCors();

  //habilitar cors para un origen especifico
  // app.enableCors({
  //   origin: 'http://localhost:3000',
  // });
  //app.useGlobalFilters(new AllExceptionsFilter(httpRef, logger));
  await app.listen(5000);
}
bootstrap();
