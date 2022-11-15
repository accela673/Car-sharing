import {BadRequestException, Injectable} from '@nestjs/common';
import { CarsPark } from './entities/cars.entity';
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import { CreateDto, UpdateDto } from './dto/cars.dto';

@Injectable()
export class CarsService {
    constructor(
        @InjectRepository(CarsPark)
        private readonly carsRepository: Repository<CarsPark>
    ){}

    async create(car: CreateDto): Promise<CreateDto>{
        const num = await this.carsRepository.findOne({where:{number: car.number}})
        if(num) throw new BadRequestException("Car with this number already exists")
        return await this.carsRepository.save(car);
      }

      async remove(id: number) {
        const car = await this.carsRepository.findOne({where:{id:id}});
        if(!car) throw new BadRequestException("Car not found")
        return await this.carsRepository.remove(car);
    }

    async findOne(id:number): Promise<CreateDto> {
        return await this.carsRepository.findOne({where: {id:id}})
        
   }

   async findAll(){
        return await this.carsRepository.find()
   }

   async editOne(id:number, updatedCar: UpdateDto){
        const car = await this.carsRepository.findOne({where:{id:id}});
        if(!car) throw new BadRequestException("Car not found")
        Object.assign(car, updatedCar)
        return await this.carsRepository.save(car)
        
   }
}
