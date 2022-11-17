import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/users.dto';
import * as bcrypt from 'bcrypt';
import { ApiTags } from '@nestjs/swagger';


@ApiTags("Registration and login")
@Controller('auth')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}


    @UsePipes(new ValidationPipe())
    @Post('/registration')
    async createUser(@Body() user: CreateUserDto): Promise<CreateUserDto> {
        let {username, password} = user
        const hashedPassword = await bcrypt.hash(password, 8);
        user.password = hashedPassword
        return await this.usersService.createUser(user)
    }
}