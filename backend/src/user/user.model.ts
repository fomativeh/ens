import * as mongoose from 'mongoose';
import { planSchema } from 'src/plan/plan.model';

export const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, 'Firstname is required'],
    },
    lastname: {
        type: String,
        required: [true, 'Lastname is required'],
      },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please fill a valid email address',
      ],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    hashedRt: {
      type: String || null,
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    subscriptionPlan: {
        type: planSchema
    }
  },
  { timestamps: true },
);