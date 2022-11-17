import { Controller, Get, UseGuards, Post, Request } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { RentService } from './rent.service';


@Controller('rent')
export class RentController {
    constructor (private readonly rentService: RentService){}



    @UseGuards(JwtAuthGuard)
    @Get()
    async check(@Request() req: any){
        console.log(req)
        return req.user.username
    }
}
