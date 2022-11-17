import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class RentDto{
    @IsNotEmpty()
    @IsNumber()
    car_id: number;

    @IsNotEmpty()
    @IsString()
    tariff: string;

    @IsNotEmpty()
    @IsNumber()
    days_count: number;
}