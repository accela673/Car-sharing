import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RentDto } from './dto/rent.dto';
import { Rents } from './entities/rent.entity';


@Injectable()
export class RentService {
    
    constructor (
        @InjectRepository(Rents)
        private readonly rentEntity: Repository<Rents>){}



    async postRent(rent: Rents): Promise<Rents>{
        const yourCar = await this.rentEntity.findOne({where:{car_id: rent.car_id, renter_username: rent.renter_username}})
        const carId = await this.rentEntity.findOne({where:{car_id: rent.car_id}})
        let endOfRent = rent.date.setDate(rent.date.getDate()) + rent.days_count
        let end = new Date(endOfRent)
        if (carId && yourCar) throw new BadRequestException(`You have already rented this car until ${end}`)
        if(carId) throw new BadRequestException("Car is alredy rented by other")
        return await this.rentEntity.save(rent)
    }

    async getRentByID(rent_id: any){
        return await this.rentEntity.findOne({where: {rent_id: rent_id}})
    }

    async delete(rent_id:any){
        const rent = await this.rentEntity.findOne({where: {rent_id: rent_id}})
        if(!rent) throw new BadRequestException(`Rent with id:${rent_id} does not exists`)
        return await this.rentEntity.remove(rent)
    }

    async getAllRents(){
        return await this.rentEntity.find()
    }

}
