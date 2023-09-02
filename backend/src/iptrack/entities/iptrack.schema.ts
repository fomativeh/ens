import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class IPTrack extends Document {
  @Prop({ unique: true })
  ip: string;

  @Prop({ default: 0 })
  searchCount: number;

  @Prop()
  lastSearchAt: Date;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const IPTrackSchema = SchemaFactory.createForClass(IPTrack);
