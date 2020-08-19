/* Coffee Entity - FINAL CODE */
import { Column, Entity, PrimaryGeneratedColumn, JoinTable, ManyToMany } from 'typeorm';
import { Flavor } from './flavor';

@Entity() // sql table === 'coffee'
export class Coffee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 'TEST' })
    name: string;

    @Column()
    brand: string;

    @Column({ default: 0 })
    recommendations: number;

    @Column({ nullable: true })
    description: number;

    //@Column('json', { nullable: true })
    @JoinTable() // 👈 Join the 2 tables - only the OWNER-side does this
    @ManyToMany(
        type => Flavor,
        flavor => flavor.coffees, // what is "coffee" within the Flavor Entity
        {
            cascade: true, // 👈 or optionally just insert or update ['insert']
        },
    ) // 👈
    flavors: Flavor[];
}