import { Controller, Get } from '@nestjs/common';
import { LeaderboardService } from './leaderboard.service';
import { Users } from '../users/schemas/users.schema';

@Controller('leaderboard')
export class LeaderboardController {
  constructor(private readonly leaderboardService: LeaderboardService) {}

  @Get()
  async findAll(): Promise<Users[]>{
    return this.leaderboardService.findAll();
  }
}
