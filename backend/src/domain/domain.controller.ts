import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  UseGuards,
  Ip,
  HttpException,
} from '@nestjs/common';
import { GetUser } from 'src/common/decorators';
import { AtGuard } from 'src/common/guards';
import { CatchExceptionHandler } from 'src/lib';
import { SuccessReponse } from 'src/lib/success-response-handler';
import { DomainService } from './domain.service';
import { CreateDomainDto } from './dto/create-domain.dto';
import { UpdateDomainDto } from './dto/update-domain.dto';

@Controller('domain')
export class DomainController {
  constructor(private readonly domainService: DomainService) {}

  @UseGuards(AtGuard)
  @Post('appraise')
  async getDomainAppraisal(
    @GetUser() User: any,
    @Body('domainName') domainName: string,
  ) {
    try {
      const domain = await this.domainService.appraiseDomain(domainName, User);
      return SuccessReponse(HttpStatus.OK, 'Appraisal successful', domain);
    } catch (error) {
      CatchExceptionHandler(error);
    }
  }

  @Post('appraise-trial')
  async getDomainAppraisalFree(
    @Ip() ip: string,
    @Body('domainName') domainName: string,
  ) {
    try {
      const domain = await this.domainService.appraiseDomainFree({
        ip,
        domainName,
      });
      return SuccessReponse(HttpStatus.OK, 'Appraisal successful', domain);
    } catch (error) {
      throw new HttpException(error.message, error.status);
      // CatchExceptionHandler(error);
    }
  }
}
