import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import * as dotenv from 'dotenv';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

dotenv.config();

type JwtPayload = {
  _id: string;
  email: string;
};

@Injectable()
export class AtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.AT_SECRET,
    });
  }

  async validate(payload: JwtPayload) {
    const dbUser = await this.userService.findOne(payload._id, true);

    if (!dbUser) {
      throw new UnauthorizedException('User not found');
    }

    return { ...payload, dbUser };
  }
}
