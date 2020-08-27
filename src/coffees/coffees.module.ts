/* CoffeesModule - FINAL CODE */
import { Module, Inject, Injectable } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from '../entities/coffee';
import { Flavor } from '../entities/flavor';
import { Event } from '../entities/event';
import { COFFEE_BRANDS } from './coffees.constants';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';

//MOCK
export class MockCoffeesService { }
export class ConfigService { };
export class ConfigTest { }
export class ConfigProd { }


@Injectable()
export class CoffeBrandFactory {
  create() {
    return ['buddy brew', 'nescafe']
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event]),
  ConfigModule.forFeature(coffeesConfig)
  ], // 👈 Adding Coffee Entity here to TypeOrmModule.forFeature
  controllers: [CoffeesController],
  providers: [CoffeesService, , CoffeBrandFactory
    /*
    {
    provide: COFFEE_BRANDS, // 👈
    useFactory: async (connection: Connection): Promise<string[]> => {
      // const coffeeBrands = await connection.query('SELECT * ...');
      const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe'])
      return coffeeBrands;
    },
    inject: [Connection],
    //useFactory: () => ['buddy brew', 'nescafe'],
    //useValue: ['buddy brew', 'nescafe'] // array of coffee brands,
  },/*
    {
      provide: ConfigService,
      useClass:
        process.env.NODE_ENV === 'development'
          ? ConfigTest
          : ConfigProd
    },*/
    /*{
      provide: COFFEE_BRANDS, // 👈
      useFactory: (brands: CoffeBrandFactory) => brands.create(),
      inject: [CoffeBrandFactory],

    }*/
  ],
  /*providers: [
    { provide: CoffeesService, useClass: CoffeesService, useValue: new MockCoffeesService() },
  ],*/
  exports: [CoffeesService]
})
export class CoffeesModule { }