import { Controller, Get, UseGuards, Post, Request, Body, BadRequestException,Param, Delete } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { RentDto } from './dto/rent.dto';
import { Rents } from './entities/rent.entity';
import { RentService } from './rent.service';
import { conditions } from './conditions';
import { ApiTags, ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';

@ApiTags("Rent car only for authorized users")
@Controller('rent')
export class RentController {
    constructor (private readonly rentService: RentService){}


    @UseGuards(JwtAuthGuard)
    @Post()
    @ApiBearerAuth()
    async newRent(@Request() req: any, @Body() rent: RentDto){
        const newRent = new Rents()
        newRent.renter_username = req.user.username;
        newRent.car_id = rent.car_id;
        newRent.tariff = rent.tariff;
        newRent.days_count = rent.days_count;
        newRent.date = new Date();
        if (newRent.date.getDay() === 0 || newRent.date.getDay() === 6){
            throw new BadRequestException("You cant rent in weekends")
        }
        await this.rentService.postRent(newRent)
        return await conditions(rent.tariff, rent.days_count)
    }

    @ApiBearerAuth()
    @ApiUnauthorizedResponse()
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getRent(@Param('id') rentID: string){
        return await this.rentService.getRentByID(rentID)
    }

    @ApiBearerAuth()
    @ApiUnauthorizedResponse()
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async deleeteRent(@Param('id') rentId: string){
        return await this.rentService.delete(rentId)
    }
    
    @ApiBearerAuth()
    @ApiUnauthorizedResponse()
    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(@Request() req: any){
        return await this.rentService.getAllRents(req.user.username)
    }

}

