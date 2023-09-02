import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Plan extends Document {
  @Prop()
  name: string;

  @Prop()
  maxSearches: number;

  @Prop()
  price: number;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const PlanSchema = SchemaFactory.createForClass(Plan);
