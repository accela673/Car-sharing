import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class RentDto{
    @ApiProperty({example: 1})
    @IsNotEmpty()
    @IsNumber()
    car_id: number;

    @ApiProperty({example: 1})
    @IsNotEmpty()
    @IsString()
    tariff: number;

    @ApiProperty({example: 5})
    @IsNotEmpty()
    @IsNumber()
    days_count: number;
}