import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//npm install class-validator class-transformer
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    //error with body
    forbidNonWhitelisted: true,
    //conver body
    transform: true,
    //cast body
    whitelist: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
  }))
  await app.listen(3000);
}
bootstrap();
