import { IsNotEmpty, IsString, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class UpdateDto{
    @ApiProperty({example: "Bugatti"})
    @IsNotEmpty()
    @IsString()
    brand: string;

    @ApiProperty({example: "TopG"})
    @IsNotEmpty()
    @IsString()
    model: string;

    @ApiProperty({example: "123HJFB5"})
    @IsNotEmpty()
    @IsString()
    number: string;

    @ApiProperty({example: "FGWERG"})
    @IsNotEmpty()
    @IsString()
    VIN: string
}