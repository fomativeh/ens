import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AtStrategy, RtStrategy } from './strategies';
import { JwtModule } from '@nestjs/jwt';
import { User, UserSchema } from 'src/user/entities/user.schema';
import { UserModule } from 'src/user/user.module';
import { Plan, PlanSchema } from 'src/plan/entities/plan.schema';
import { HashingService } from 'src/services/hashing/hashing.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Plan.name, schema: PlanSchema },
    ]),
    JwtModule.register({}),
    UserModule,
  ],
  providers: [AuthService, AtStrategy, RtStrategy, HashingService],
  controllers: [AuthController],
})
export class AuthModule {}
