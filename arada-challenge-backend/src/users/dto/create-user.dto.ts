import { Prop } from '@nestjs/mongoose';
import { MinLength } from 'class-validator';

export class CreateUserDto {
  @Prop({ required: true })
  email: string;
 
  @Prop({ required: true })
  @MinLength(8, { message: 'Password should be at least 8 characters long' })
  password: string;

  @Prop({ required: true })
  @MinLength(8, { message: 'Password should be at least 8 characters long' })
  confirm_password: string;
}