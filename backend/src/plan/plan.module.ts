import { Module } from '@nestjs/common';
import { PlanService } from './plan.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Plan, PlanSchema } from './entities/plan.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Plan.name, schema: PlanSchema }]),
  ],
  providers: [PlanService],
  exports: [PlanService],
})
export class PlanModule {}
