import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//without module
//import { CoffeesService } from './coffees/coffees.service';
//import { CoffeesController } from './coffees/coffees.controller';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  imports: [CoffeesModule],
  controllers: [
    AppController],
  providers: [AppService],
})
export class AppModule { }
