import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CarsPark {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  brand: string;

  @Column()
  model: string;

  @Column({unique:true})
  number: string

  @Column({unique: true})
  VIN: string

  @Column({default:false})
  rent: boolean
}