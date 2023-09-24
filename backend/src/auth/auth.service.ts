import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthDto, CreateUserDto } from './dto';
import * as bcrypt from 'bcrypt';
import { Tokens } from './types';
import { JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { UserDto } from 'src/user/dto';
import {
  CatchExceptionHandler,
  CustomHttpException,
  StringEmpty,
} from 'src/lib';
import { SuccessReponse } from 'src/lib/success-response-handler';
import { Success } from 'src/types';
import { Plan } from 'src/plan/entities/plan.schema';
import { User } from 'src/user/entities/user.schema';
import { HashingService } from 'src/services/hashing/hashing.service';

dotenv.config();

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectModel(Plan.name) private readonly plansModel: Model<Plan>,
    private hashingService: HashingService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(dto: CreateUserDto): Promise<Tokens> {
    try {
      if (!dto.firstname) {
        throw new HttpException(
          'firstname is required',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (!dto.lastname) {
        throw new HttpException('lastname is required', HttpStatus.BAD_REQUEST);
      }

      if (!dto.email) {
        throw new HttpException('Email is required', HttpStatus.BAD_REQUEST);
      }

      if (!dto.password) {
        throw new HttpException('password is required', HttpStatus.BAD_REQUEST);
      }

      const userExists = await this.userModel
        .findOne({ email: dto.email })
        .exec();

      if (userExists) {
        throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
      }

      // get selected plan
      const plan = await this.plansModel.findOne({ name: dto.plan });

      if (!plan) {
        throw new HttpException("Plan doesn't exist", HttpStatus.BAD_REQUEST);
      }

      const hash = await this.hashingService.hashData(dto.password);
      const newUser = new this.userModel({
        firstname: dto.firstname,
        lastname: dto.lastname,
        email: dto.email,
        password: hash,
        subscriptionPlan: plan._id,
      });

      const user = await newUser.save();

      const tokens = await this.getTokens(user._id.toString(), user.email);
      await this.updateRtHash(user._id.toString(), tokens.refresh_token);
      const { password, ...userWithout } = user.toObject();
      return { ...userWithout, ...tokens };
    } catch (error) {
      console.log(error.message);
      CatchExceptionHandler(error);
    }
  }

  async signIn(dto: AuthDto): Promise<Tokens | any> {
    try {
      const user = await this.userModel.findOne({ email: dto.email }).exec();

      if (!user)
        CustomHttpException(
          HttpStatus.NOT_FOUND,
          'User Not Found',
          'NOT_FOUND',
        );

      const passwordMatches = await bcrypt.compare(dto.password, user.password);
      if (!passwordMatches)
        CustomHttpException(
          HttpStatus.UNPROCESSABLE_ENTITY,
          'Invalid Credentials',
          'UNPROCESSABLE_ENTITY',
        );
      const { password, ...userwithout } = user.toObject();
      console.log({ user });
      const tokens = await this.getTokens(user._id.toString(), user.email);
      await this.updateRtHash(user._id.toString(), tokens.refresh_token);

      return { ...userwithout, ...tokens };
    } catch (error) {
      CatchExceptionHandler(error);
    }
  }

  async logout(_id: string): Promise<void> {
    try {
      if (StringEmpty(_id))
        CustomHttpException(
          HttpStatus.BAD_REQUEST,
          'id should not be empty',
          'BAD_REQUEST',
        );

      if (!_id.match(/^[0-9a-fA-F]{24}$/))
        CustomHttpException(
          HttpStatus.UNPROCESSABLE_ENTITY,
          'invalid id',
          'UNPROCESSABLE_ENTITY',
        );

      if (StringEmpty(_id))
        CustomHttpException(
          HttpStatus.BAD_REQUEST,
          'id is required',
          'BAD_REQUEST',
        );

      await this.userModel.updateMany(
        { _id, hashedRt: { $not: { $eq: null } } },
        { $set: { hashedRt: null } },
      );
    } catch (error) {
      CatchExceptionHandler(error);
    }
  }

  async refreshToken(_id: string, refreshToken: string): Promise<Tokens> {
    try {
      if (StringEmpty(_id))
        CustomHttpException(
          HttpStatus.BAD_REQUEST,
          'id should not be empty',
          'BAD_REQUEST',
        );

      if (!_id.match(/^[0-9a-fA-F]{24}$/))
        CustomHttpException(
          HttpStatus.UNPROCESSABLE_ENTITY,
          'invalid id',
          'UNPROCESSABLE_ENTITY',
        );

      const user = await this.userModel.findOne({ _id }).exec();

      if (!user)
        CustomHttpException(HttpStatus.NOT_FOUND, 'Invalid User', 'NOT_FOUND');

      if (!user.hashedRt)
        CustomHttpException(
          HttpStatus.FORBIDDEN,
          'Access is Denied',
          'FORBIDDEN',
        );

      const rtMatched = await bcrypt.compare(refreshToken, user.hashedRt);

      if (!rtMatched)
        CustomHttpException(HttpStatus.FORBIDDEN, 'Access Denied', 'FORBIDDEN');

      const tokens = await this.getTokens(user._id.toString(), user.email);
      await this.updateRtHash(user._id.toString(), tokens.refresh_token);
      const { password, ...userWithout } = user.toObject();
      return { ...userWithout, ...tokens };
    } catch (error) {
      CatchExceptionHandler(error);
    }
  }

  async getTokens(_id: string, email: string): Promise<Tokens> {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        { _id, email },
        {
          secret: process.env.AT_SECRET,
          expiresIn: 60 * 15,
        },
      ),
      this.jwtService.signAsync(
        { _id, email },
        {
          secret: process.env.RT_SECRET,
          expiresIn: 60 * 60 * 24 * 7,
        },
      ),
    ]);

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async updateRtHash(_id: string, refreshToken: string): Promise<void> {
    const hash = await this.hashingService.hashData(refreshToken);
    await this.userModel.updateOne({ _id }, { hashedRt: hash }).exec();
  }
}
