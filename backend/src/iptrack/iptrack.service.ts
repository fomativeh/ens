import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateIptrackDto } from './dto/create-iptrack.dto';
import { UpdateIptrackDto } from './dto/update-iptrack.dto';
import { IPTrack } from './entities/iptrack.schema';

@Injectable()
export class IptrackService {
  constructor(
    @InjectModel(IPTrack.name) private ipTrackModel: Model<IPTrack>,
  ) {}

  async create({ ip }: { ip: string }) {
    try {
      const ipExists = await this.findOne(ip, true);

      if (!ipExists) {
        const newIP = await this.ipTrackModel.create({
          ip,
          searchCount: 1,
          lastSearchAt: new Date(),
          createdAt: new Date(),
        });

        return newIP;
      }

      // 3 free appraisals
      if (ipExists.searchCount >= 3) {
        throw new HttpException(
          'Search limit exceeded',
          HttpStatus.BAD_REQUEST,
        );
      }

      const updatedCount = await this.ipTrackModel.updateOne(
        { _id: ipExists.id },
        { searchCount: ipExists.searchCount + 1 },
      );

      if (!updatedCount) {
        throw new HttpException(
          'Something went wrong',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      return updatedCount;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }


  async findOne(ip: string, internal = false): Promise<IPTrack> {
    try {
      if (!ip) {
        throw new HttpException(
          'Ip Identifier required',
          HttpStatus.BAD_REQUEST,
        );
      }
      const user = await this.ipTrackModel.findOne({ ip });

      if (!user) {
        if (!internal) {
          throw new HttpException(
            'Ip Identifier not found',
            HttpStatus.BAD_REQUEST,
          );
        } else {
          return null;
        }
      }

      return user;
    } catch (error) {}
  }


}
