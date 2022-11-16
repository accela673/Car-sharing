import { IsNotEmpty, IsString, IsBoolean } from "class-validator";

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