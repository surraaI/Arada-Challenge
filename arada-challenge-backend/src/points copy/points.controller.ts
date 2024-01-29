import { Controller, Get, Post, Put, Param } from '@nestjs/common';
import { PointsService } from './points.service';
import { UpdatePointDto } from './dto/update-point.dto';
import { CreatePointDto } from './dto/create-point.dto';
import { Point } from './schema/point.schema';


@Controller('points')
export class PointsController {
  constructor(private pointsService: PointsService){}
  
  @Post()
  async create(createPointDto: CreatePointDto): Promise<Point>{
    return this.pointsService.create(createPointDto);
  }

  @Get()
  async findAll(): Promise<Point[]> {
    return this.pointsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id:string): Promise<Point> {
    return this.pointsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id:string, updatePointDto: UpdatePointDto){
    return this.pointsService.update(id, updatePointDto);
  }

}
