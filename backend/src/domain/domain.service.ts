import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import { Model } from 'mongoose';
import { IptrackService } from 'src/iptrack/iptrack.service';
import { UserService } from 'src/user/user.service';
import { CreateDomainDto } from './dto/create-domain.dto';
import { UpdateDomainDto } from './dto/update-domain.dto';
import { Domain } from './entities/domain.schema';

@Injectable()
export class DomainService {
  constructor(
    @InjectModel(Domain.name) private domainModel: Model<Domain>,
    private ipService: IptrackService,
    private userService: UserService,
  ) {}

  async rateDomain(domainId: string, rating: number): Promise<Domain> {
    try {
      const domain = await this.domainModel.findById(domainId);

      if (!domain) {
        throw new HttpException('Domain not found', HttpStatus.BAD_REQUEST);
      }

      domain.rating = rating;
      domain.updatedAt = new Date();

      return domain.save();
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async appraiseDomain(domainName: string, user: any = {}): Promise<Domain> {
    try {
      if (!domainName) {
        throw new HttpException(
          'Domain name cannot be empty',
          HttpStatus.BAD_REQUEST,
        );
      }

      const increaseCount = await this.userService.incrementSearchCount(
        user._id,
      );

      if (!increaseCount) {
        throw new HttpException(
          'Search Limit exceeded',
          HttpStatus.BAD_REQUEST,
        );
      }

      const appraisalResult = await this.fetchAppraisal({ domainName });

      if (!appraisalResult) {
        throw new HttpException(
          'Something went wrong trying to appraise domain',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      const update = {
        name: domainName,
        appraisedValue: parseFloat(appraisalResult?.value),
        valueUsd: parseFloat(appraisalResult?.value_usd.replace(/,/g, '')),
        lastAppraisedAt: new Date(),
      };

      const options = { upsert: true, new: true, setDefaultsOnInsert: true };
      const domain = await this.domainModel.findOneAndUpdate(
        { name: domainName },
        update,
        options,
      );

      return domain;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async appraiseDomainFree({
    ip,
    domainName,
  }: {
    ip: string;
    domainName: string;
  }): Promise<Domain> {
    try {
      const ipCheck = await this.ipService.create({ ip });

      if (!ipCheck) {
        throw new HttpException('User limit exceeded', HttpStatus.BAD_REQUEST);
      }
      return this.appraiseDomain(domainName);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  findAll() {
    return `This action returns all domain`;
  }

  findOne(id: number) {
    return `This action returns a #${id} domain`;
  }

  update(id: number, updateDomainDto: UpdateDomainDto) {
    return `This action updates a #${id} domain`;
  }

  remove(id: number) {
    return `This action removes a #${id} domain`;
  }

  private async fetchAppraisal({ domainName }) {
    try {
      const uniqueID = this.generateUniqueID();
      const response = await axios.get(
        `https://www.enskit.com/api/domain-appraisal-free?domain=${domainName}&r=0.${uniqueID}`,
      );
      return response.data;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  private generateUniqueID(): string {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 999999);
    const uniqueID = `${timestamp}${String(randomNum).padStart(6, '0')}`;
    return uniqueID;
  }
}
