import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/schemas/users.schema';

@Injectable()
export class LeaderboardService {
  constructor(@InjectModel(User.name) private usersModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return this.usersModel.find().sort({ points: -1 }).exec();
  }
} 
