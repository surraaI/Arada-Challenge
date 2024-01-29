import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from '../../auth/enums/role.enum';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  age: number;

  @Prop()
  phoneNo: number;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop({ default: 0 })
  points: number;

  @Prop()
  avatar: string;
  @Prop({ default: [Role.User] }) // Assign "user" role by default
  roles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);