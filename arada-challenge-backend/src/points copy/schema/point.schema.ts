import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type PointDocument = Point & Document;

@Schema()
export class Point {
  @Prop()
  userId: string;

  @Prop()
  value: number;
}

export const PointSchema = SchemaFactory.createForClass(Point);