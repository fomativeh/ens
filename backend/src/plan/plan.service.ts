import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { Plan } from './entities/plan.schema';

@Injectable()
export class PlanService {
  constructor(@InjectModel('Plan') private readonly planModel: Model<Plan>) {}

  async create(createPlanDto: CreatePlanDto, internal = false) {
    try {
      const planExists = await this.findOne(createPlanDto.name);

      if (planExists) {
        throw new HttpException(
          'Plan already exists in DB',
          HttpStatus.BAD_REQUEST,
        );
      }

      const plan = await this.planModel.create({
        ...createPlanDto,
      });

      if (!plan) {
        throw new HttpException(
          'Could not create plan',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      return plan;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  findAll() {
    return `This action returns all plan`;
  }

  async findOne(name: string) {
    try {
      if (!name) {
        throw new HttpException(
          'name of plan is required',
          HttpStatus.BAD_REQUEST,
        );
      }


      const plan = await this.planModel.findOne({ name });

      return plan;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  update(id: number, updatePlanDto: UpdatePlanDto) {
    return `This action updates a #${id} plan`;
  }

  remove(id: number) {
    return `This action removes a #${id} plan`;
  }
}
