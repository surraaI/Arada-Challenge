
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Player, PlayerDocument } from './schemas/player.schema';
import { Model } from 'mongoose';

@Injectable()
export class NotesService {
  constructor(@InjectModel(Player.name) private readonly playerModel: Model<PlayerDocument>) {}

  async findAll(): Promise<Player[]> {
    return await this.playerModel.find().sort({ score: -1 }).limit(10).exec(); // sort by score in descending order and limit to 10 players
  }

  async findOne(id: string): Promise<Player> {
    return await this.playerModel.findById(id).exec();
  }

  async create(player: Player): Promise<Player> {
    const newPlayer = new this.playerModel(player);
    return await newPlayer.save();
  }

  async update(id: string, player: Player): Promise<Player> {
    return await this.playerModel.findByIdAndUpdate(id, player, { new: true });
  }

}