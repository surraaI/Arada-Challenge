import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { User } from 'src/users/schemas/users.schema';


export type ChallengeDocument = Challenge & Document;

@Schema()
export class Challenge {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  challengeTag: string;

  @Prop({ required: true })
  challengeTime: Date;

  @Prop({ default: 0 })
  likes: number;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'User', required: true })
  userId: User;

  @Prop({ default: false })
  isReported: boolean;
}

export const ChallengeSchema = SchemaFactory.createForClass(Challenge);