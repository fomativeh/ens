import {
  Controller,
  Post,
  Ip,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { IptrackService } from './iptrack.service';


@Controller('iptrack')
export class IptrackController {
  constructor(private readonly iptrackService: IptrackService) {}

  @Post()
  async create(@Ip() ip: string) {
    try {
      const domain = await this.iptrackService.create({ ip });
      return {
        statusCode: HttpStatus.OK,
        message: 'Domain found',
        data: domain,
      };
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
