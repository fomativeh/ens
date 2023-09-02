import * as mongoose from 'mongoose';

export const planSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Plan name is required'],
    },
    maxSearches: {
        type: Number,
        required: [true, 'Max number of searches is required'],
      },
    price: {
      type: Number,
      required: [true, 'price is required'],
    }
  },
  { timestamps: true },
);