import { IsNotEmpty, IsString } from "class-validator";

export class CreateDto {
    
    @IsNotEmpty()
    @IsString()
    brand: string;

    @IsNotEmpty()
    @IsString()
    model: string;

    @IsNotEmpty()
    @IsString()
    number: string;

    @IsNotEmpty()
    @IsString()
    VIN: string
     
}

