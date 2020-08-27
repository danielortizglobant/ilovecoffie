import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
//without module
//import { CoffeesService } from './coffees/coffees.service';
//import { CoffeesController } from './coffees/coffees.controller';
import { CoffeesModule } from './coffees/coffees.module';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { DatabaseModule } from './database/database.module';
//npm install @nestjs/typeorm typeorm pg
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './common/common.module';
import * as Joi from '@hapi/joi';

/**
 *  npm install @hapi/joi
 *  npm install --save-dev @types/hapi__joi
 */

import appConfig from './config/app.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ // 👈
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        DATABASE_HOST: Joi.required(),
        DATABASE_PORT: Joi.number().default(5432),
        //DATABASE_PORT_TEST: Joi.number().required(),
      }),
      load: [appConfig],
      //envFilePath:
      //ignoreEnvFile
    }),
    CoffeesModule,
    /*
    TypeOrmModule.forRoot({
      type: 'postgres', // type of our database
      host: process.env.DATABASE_HOST, // database host
      port: +process.env.DATABASE_PORT, // database host
      username: process.env.DATABASE_USER, // username
      password: process.env.DATABASE_PASSWORD, // user password
      database: process.env.DATABASE_NAME, // name of our database,
      autoLoadEntities: true, // models will be loaded automatically (you don't have to explicitly specify the entities: [] array)
      synchronize: true, // your entities will be synced with the database (ORM will map entity definitions to corresponding SQL tabled), every time you run the application (recommended: disable in the production)
    }),
    */
    CoffeeRatingModule,
    DatabaseModule,
    CommonModule,],
  controllers: [
    AppController],
  providers: [AppService],
})
export class AppModule { }
