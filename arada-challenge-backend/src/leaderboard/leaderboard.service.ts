import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from 'src/users/schemas/users.schema';

@Injectable()
export class LeaderboardService {
  constructor(@InjectModel(Users.name) private usersModel: Model<Users> ){}

    async findAll(): Promise<Users[]> {
      return this.usersModel.find().sort({ points: -1}).exec();
  }
} 
