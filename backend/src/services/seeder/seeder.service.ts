import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Plan } from 'src/plan/entities/plan.schema';
import { PlanService } from 'src/plan/plan.service';
import { User } from 'src/user/entities/user.schema';
import { UserService } from 'src/user/user.service';
import { HashingService } from '../hashing/hashing.service';

@Injectable()
export class SeederService {
  constructor(
    // @InjectModel('User') private readonly userModel: Model<User>,
    // @InjectModel('Plan') private readonly planModel: Model<Plan>,
    private planService: PlanService,
    private userSerive: UserService,
    private hashingService: HashingService,
  ) {}

  async seed() {
    try {
      const plans = [
        {
          name: 'basic_plan',
          price: 0,
          maxSearches: 5,
        },
        {
          name: 'plus_plan',
          price: 10,
          maxSearches: 350,
        },
        {
          name: 'pro_plan',
          price: 50,
          maxSearches: 1000,
        },
        {
          name: 'delux_plan',
          price: 2000,
          maxSearches: 200000000,
        },
      ];

      for (let index = 0; index < plans.length; index++) {
        const res = await this.planService.create(plans[index], true);
        if (res) {
          console.log(`plan ${index} seeded`);
        }
      }

      const admin1 = await this.userSerive.create({
        email: 'desezo@gmail.com',
        isAdmin: true,
        firstname: 'Desmond',
        lastname: 'Ezo-Ojile',
        password: await this.hashingService.hashData('NewPassword'),
      });

      if (admin1)
        throw new HttpException(
          'Admin user not created',
          HttpStatus.BAD_REQUEST,
        );
    } catch (error) {
      console.log({ source: 'DB seeding failed', reason: error.message });
    }
  }
}
