
/* Flavor Entity - FINAL CODE */
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Coffee } from './coffee';

@Entity()
export class Flavor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(
    type => Coffee,
    coffee => coffee.flavors, // what is "flavor" within the Coffee Entity
  ) // 👈
  coffees: Coffee[];
}