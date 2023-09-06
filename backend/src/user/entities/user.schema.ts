import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Plan, PlanSchema } from '../../plan/entities/plan.schema';

@Schema()
export class User extends Document {
  @Prop({
    unique: true,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
  })
  email: string;

  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname: string;

  @Prop()
  hashedRt: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: false })
  isEmailVerified: boolean;

  @Prop({ default: false })
  isAdmin: boolean;

  @Prop({ default: 0 })
  searchCount: number;

  @Prop({ default: new Date() })
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop({
    type: Types.ObjectId,
    ref: 'Plan',
  })
  subscriptionPlan: Plan;
}

export const UserSchema = SchemaFactory.createForClass(User);
