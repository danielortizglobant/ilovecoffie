import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//npm install class-validator class-transformer
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ApiKeyGuard } from './common/guards/api-key.guard';
import { WrapResponseInterceptor } from './common/interceptors/wrap-response.interceptor';
import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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
  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalInterceptors(new WrapResponseInterceptor(), new TimeoutInterceptor());
  //app.useGlobalGuards(new ApiKeyGuard())

  const options = new DocumentBuilder()
    .setTitle('Iluvcoffee')
    .setDescription('Coffee application')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
