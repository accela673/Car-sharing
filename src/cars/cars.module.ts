import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsPark } from './entities/cars.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarsPark])],
  controllers: [CarsController],
  providers: [CarsService]
})
export class CarsModule {}
