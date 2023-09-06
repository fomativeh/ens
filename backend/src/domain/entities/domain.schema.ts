import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Domain extends Document {
  @Prop()
  name: string;

  @Prop()
  appraisedValue: number;

  @Prop()
  valueUsd: number;

  @Prop()
  rating: number;

  @Prop()
  lastAppraisedAt: Date;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const DomainSchema = SchemaFactory.createForClass(Domain);
