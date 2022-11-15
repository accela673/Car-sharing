import { Controller, Post, Body, Delete, Param, Get, UsePipes, ValidationPipe, Patch } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateDto, UpdateDto } from './dto/cars.dto';

@Controller('cars')
export class CarsController {
    constructor(private readonly carService: CarsService){}
    
    @Get(':id')
    async getCarByID(@Param('id') id: number){
        return await this.carService.findOne(+id);
        
      }

    @Get()
    async getAllCars(){
        return await this.carService.findAll();
        
    }
    @UsePipes(new ValidationPipe())
    @Post()
    async toCreateCar(@Body() createDto: CreateDto){
        await this.carService.create(createDto);
        return 'Car added';
    }


    @Patch(':id')
    async update(@Param('id') id:number, @Body() updateDto: UpdateDto){
      return await this.carService.editOne(+id, updateDto);

    }
    
    @Delete(':id')
    async remove(@Param('id') id: number) {
      await this.carService.remove(+id);
      return "Car removed";
    }



}
