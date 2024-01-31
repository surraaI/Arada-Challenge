import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { SalonsModule } from './salons/salons.module';
import config from './config/mongo.keys'


@Module({
  imports: [ConfigModule.forRoot(),
    MongooseModule.forRoot(config.mongoURi ),
 
    SalonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
