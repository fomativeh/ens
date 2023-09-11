import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    try {
      if (createUserDto.email) {
        throw new HttpException('Email is required', HttpStatus.BAD_REQUEST);
      }

      if (createUserDto.firstname) {
        throw new HttpException(
          'First name is required',
          HttpStatus.BAD_REQUEST,
        );
      }
      if (createUserDto.lastname) {
        throw new HttpException(
          'Last Name is required',
          HttpStatus.BAD_REQUEST,
        );
      }
      if (createUserDto.password) {
        throw new HttpException('Password is required', HttpStatus.BAD_REQUEST);
      }

      const userExists = await this.userModel.findOne({
        email: createUserDto.email,
      });

      if (userExists) {
        throw new HttpException('user already exists', HttpStatus.BAD_REQUEST);
      }

      const user = await this.userModel.create({
        ...createUserDto,
      });

      return user;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: string, internal = false) {
    try {
      if (!id) {
        throw new HttpException('Id is required', HttpStatus.BAD_REQUEST);
      }
      const user = await this.userModel
        .findById(id)
        .populate('subscriptionPlan');

      if (!internal && !user) {
        throw new HttpException('user not found', HttpStatus.NOT_FOUND);
      }

      return user;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {}

  async incrementSearchCount(userId: string): Promise<User> {
    // Find the user by ID
    const user = await this.userModel
      .findById(userId)
      .populate('subscriptionPlan');

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Check if the user has reached the maximum number of searches allowed by their plan
    const maxSearches = user.subscriptionPlan?.maxSearches || 0;
    if (user.searchCount >= maxSearches) {
      throw new BadRequestException(
        'You have reached the maximum number of searches for your plan',
      );
    }

    // Increment the search count
    user.searchCount += 1;

    // Save the updated user document
    await user.save();

    return user;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
