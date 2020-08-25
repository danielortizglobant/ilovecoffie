//nest g mo coffee-rating
import { Module } from '@nestjs/common';
import { CoffeeRatingService } from './coffee-rating.service';
import { CoffeesModule } from 'src/coffees/coffees.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [CoffeesModule,
    DatabaseModule.register({ // 👈 passing in dynamic values
      type: 'postgres',
      host: process.env.DATABASE_HOST, // database host
      port: +process.env.DATABASE_PORT, // database host
      username: process.env.DATABASE_USER, // username
      password: process.env.DATABASE_PASSWORD, // user password
      database: process.env.DATABASE_NAME, // name of our database,
    })],
  providers: [CoffeeRatingService]
})
export class CoffeeRatingModule { }
