import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/users.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const { email, password, confirm_password, ...rest } = createUserDto;

    if (password !== confirm_password) {
      throw new HttpException('Passwords do not match', HttpStatus.BAD_REQUEST);
    }

    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new HttpException('Email already exists', HttpStatus.CONFLICT);
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new this.userModel({
        email,
        password: hashedPassword,
        ...rest,
      });

      // Validation code here if needed

      return user.save();
    } catch (error) {
      throw new HttpException(
        'Failed to create user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }


  async logout(userId: string) {
    // Perform any necessary logout actions here
    // This could include invalidating the user's authentication token or session

    // For example, you could update the user's record in the database
    // to invalidate their authentication token or session

    const user = await this.userModel.findByIdAndUpdate(
      userId,
      { $set: { token: null } }, // Assuming you have a 'token' field in the user schema
      { new: true }
    );

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    // Return a success message or any additional data if needed
    return {
      message: 'Logout successful',
      user: user,
    };
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(email: string) {
    return this.userModel.findOne({ email });
  }
  findUserById(id){
    return this.userModel.findById(id)
  }

  updateUser(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  deleteUser(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
  async createAdmin(createUserDto: CreateUserDto) {
    const { email, password, confirm_password, ...rest } = createUserDto;

    if (password !== confirm_password) {
      throw new HttpException('Passwords do not match', HttpStatus.BAD_REQUEST);
    }

    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new HttpException('Email already exists', HttpStatus.CONFLICT);
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new this.userModel({
        email,
        password: hashedPassword,
        ...rest,
      });

      // Validation code here if needed

      return user.save();
    } catch (error) {
      throw new HttpException(
        'Failed to create user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

}
