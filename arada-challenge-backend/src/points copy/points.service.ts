import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePointDto } from './dto/create-point.dto';
import { Point, PointDocument } from './schema/point.schema';
import { UpdatePointDto } from './dto/update-point.dto';

@Injectable()
export class PointsService {
  constructor(
    @InjectModel(Point.name) private pointModel: Model<PointDocument>) {}

  async create(createPointDto: CreatePointDto): Promise<Point> {
    const createPoint = new this.pointModel(createPointDto);
    return createPoint.save();
  }

  async findAll(): Promise<Point[]> {

    return this.pointModel.find().exec();

  }


  async findOne(id: string): Promise<Point> {

    return this.pointModel.findById(id).exec();

  }


  async update(id: string, updatePointDto: UpdatePointDto): Promise<Point> {

    return this.pointModel.findByIdAndUpdate(id, updatePointDto, { new: true }).exec();

  }
  
}
