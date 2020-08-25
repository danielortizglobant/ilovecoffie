//nest g mo database
import { Module, DynamicModule } from '@nestjs/common';
import { ConnectionOptions } from 'typeorm';
import { createConnection } from 'typeorm';

/*
export class DatabaseModule {
  static register(options: ConnectionOptions): DynamicModule { }
}
*/

@Module({})
export class DatabaseModule {
  static register(options: ConnectionOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: 'CONNECTION', // 👈
          useValue: {}//createConnection(options),
        }
      ]
    }
  }
};