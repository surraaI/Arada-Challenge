import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Prop } from '@nestjs/mongoose';

export class UpdateUserDto extends PartialType(CreateUserDto) {
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
}
