import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateDto {
    @ApiProperty({example: "Tesla"})
    @IsNotEmpty()
    @IsString()
    brand: string;

    @ApiProperty({example: "model X"})
    @IsNotEmpty()
    @IsString()
    model: string;

    @ApiProperty({example: "1DJ24"})
    @IsNotEmpty()
    @IsString()
    number: string;

    @ApiProperty({example: "134RFDQHJ1"})
    @IsNotEmpty()
    @IsString()
    VIN: string
     
}

