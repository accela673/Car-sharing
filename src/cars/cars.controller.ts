import { Controller, Post, Body, Delete, Param } from '@nestjs/common';
import { CarsPark } from './cars.entity';
import { CarsService } from './cars.service';
import { CreateDto } from './cars_dto';

@Controller('cars')
export class CarsController {
    constructor(private readonly carService: CarsService){}

    @Post()
    async toCreateCar(@Body() createDto: CreateDto){
        await this.carService.create(createDto)
    }
    
    @Delete(':id')
    async remove(@Param('id') id: string) :Promise<void> {
      await this.carService.remove(+id);
    }
}
