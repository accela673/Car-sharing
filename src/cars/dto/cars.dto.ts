import { IsNotEmpty, IsString, IsBoolean } from "class-validator";
import { isBoolean } from "util";

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

export class UpdateDto{

    @IsString()
    brand: string;

    @IsString()
    model: string;

    @IsString()
    number: string;

    @IsString()
    VIN: string

    @IsBoolean()
    rent: boolean

}