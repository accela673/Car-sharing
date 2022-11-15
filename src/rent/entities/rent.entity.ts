import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Rents{
    @PrimaryGeneratedColumn()
    rent_id: number;

    @Column()
    user_id: number;

    @Column()
    car_id: number;

    @Column()
    tariff: number;

    @Column()
    days_count: number;

    @Column()
    date: Date;
}