import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User{
    @PrimaryGeneratedColumn()
    user_id: string;

    @Column({unique: true})
    username: string;

    @Column()
    password: string;
}