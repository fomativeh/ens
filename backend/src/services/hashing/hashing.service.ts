import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashingService {
  hashData(data: string): Promise<string> {
    return bcrypt.hash(data, 10);
  }
}
