import { Module } from '@nestjs/common';
import { LeaderboardService } from './leaderboard.service';
import { LeaderboardController } from './leaderboard.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Users', schema:'UsersSchema'}])],
  providers: [LeaderboardService],
  controllers: [LeaderboardController]
})
export class LeaderboardModule {}
