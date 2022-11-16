import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UsersEntity{
    @PrimaryGeneratedColumn()
    id: string
    
    @Column({unique: true})
    username: string;
    
    @Column()
    password: string;
}