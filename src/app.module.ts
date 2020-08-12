import { CoffeesController } from './coffees.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    CoffeesController, AppController],
  providers: [AppService],
})
export class AppModule { }
