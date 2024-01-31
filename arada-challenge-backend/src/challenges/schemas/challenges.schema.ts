import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChallengeDocument = Challenge & Document;

@Schema()
export class Challenge {
  @Prop({ required: true })
  challengeDesc: string;

  @Prop({ required: true })
  challengePhoto: string;

  @Prop({ required: true })
  userID: number;
}

export const ChallengeSchema = SchemaFactory.createForClass(Challenge);