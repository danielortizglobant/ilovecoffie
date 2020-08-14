// nest g class coffees/dto/update-coffee.dto --no-spec

/* UpdateCoffeeDto */
/*
export class UpdateCoffeeDto {
  readonly name?: string;
  readonly brand?: string;
  readonly flavors?: string[];
}*/

// Install @nestjs/mapped-types 
//npm i @nestjs/mapped-types
import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) { }