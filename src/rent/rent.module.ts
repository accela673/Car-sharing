import { Module } from '@nestjs/common';
import { RentService } from './rent.service';
import { RentController } from './rent.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rents } from './entities/rent.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Rents])],
  providers: [RentService],
  controllers: [RentController]
})
export class RentModule {}
