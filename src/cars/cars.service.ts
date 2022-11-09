import { Injectable } from '@nestjs/common';
import { CarsPark } from './cars.entity';
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'

@Injectable()
export class CarsService {
    constructor(
        @InjectRepository(CarsPark)
        private readonly carsRepository: Repository<CarsPark>
    ){}

    async create(car: CarsPark): Promise<CarsPark>{
        await delete(car.id)
        return await this.carsRepository.save(car);
      }

      async remove(id: number) {
        const category = await this.carsRepository.findOne({where:{id:id}});
        return await this.carsRepository.remove(category);
    }
}
