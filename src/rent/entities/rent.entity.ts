import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Rents{
    @PrimaryGeneratedColumn()
    rent_id: number;

    @Column()
    username: string;

    @Column()
    car_id: number;

    @Column()
    tariff: string;

    @Column()
    days_count: number;

    @Column()
    date: Date;
}