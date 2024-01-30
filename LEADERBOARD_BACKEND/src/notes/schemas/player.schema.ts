// notes/schemas/player.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlayerDocument = Player & Document;
@Schema()
export class Player {
  @Prop()
  name: string;

  @Prop()
  score: number;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);