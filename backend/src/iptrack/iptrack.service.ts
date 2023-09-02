import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DomainService } from 'src/domain/domain.service';
import { CreateIptrackDto } from './dto/create-iptrack.dto';
import { UpdateIptrackDto } from './dto/update-iptrack.dto';
import { IPTrack } from './entities/iptrack.schema';

@Injectable()
export class IptrackService {
  constructor(
    @InjectModel(IPTrack.name) private domainModel: Model<IPTrack>,
    private domainService: DomainService,
  ) {}

  async create({
    createIptrackDto,
    ip,
  }: {
    createIptrackDto: CreateIptrackDto;
    ip: string;
  }) {
    try {
      // check ip
      // check limit
      // domain service appraise name
      // record trx
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  findAll() {
    return `This action returns all iptrack`;
  }

  findOne(id: number) {
    return `This action returns a #${id} iptrack`;
  }

  update(id: number, updateIptrackDto: UpdateIptrackDto) {
    return `This action updates a #${id} iptrack`;
  }

  remove(id: number) {
    return `This action removes a #${id} iptrack`;
  }
}
