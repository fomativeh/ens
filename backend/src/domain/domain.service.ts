import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import { Model } from 'mongoose';
import { IptrackService } from 'src/iptrack/iptrack.service';
import { UserService } from 'src/user/user.service';
import { CreateDomainDto } from './dto/create-domain.dto';
import { UpdateDomainDto } from './dto/update-domain.dto';
import { Domain } from './entities/domain.schema';
import * as FormData from 'form-data';

interface AppraisedData {
  value: string;
  value_usd: string;
  domainName: string;
  lastAppraisedAt: Date;
}

@Injectable()
export class DomainService {
  constructor(
    @InjectModel(Domain.name) private domainModel: Model<Domain>,
    private ipService: IptrackService,
    private userService: UserService,
  ) {}

  // async rateDomain(domainId: string, rating: number): Promise<Domain> {
  //   try {
  //     const domain = await this.domainModel.findById(domainId);

  //     if (!domain) {
  //       throw new HttpException('Domain not found', HttpStatus.BAD_REQUEST);
  //     }

  //     domain.rating = rating;
  //     domain.updatedAt = new Date();

  //     return domain.save();
  //   } catch (error) {
  //     throw new HttpException(error.message, error.status);
  //   }
  // }

  async rateDomain(domain: string) {
    const form = new FormData();
    form.append('domain', domain);

    const modelurl = 'http://51.20.71.5';

    const res: { data: { appraisal: number[] } } = await axios.post(
      modelurl,
      form,
      {
        headers: {
          ...form.getHeaders(),
        },
      },
    );
    const val = res.data.appraisal[0];

    const valueUsd = (await this.getEthPrice()) * val;

    const appraisal = {
      domainName: domain,
      value: val.toString(),
      value_usd: valueUsd.toFixed(2).toString(),
      lastAppraisedAt: new Date(),
    };

    return appraisal;
  }

  scoreToEthValue(score: number) {
    const conversionFactor = 0.01; // Example conversion factor, 1 score point equals 0.01 ETH
    return Math.max(0, score * conversionFactor); // Ensure that the value is not negative
  }

  async appraiseDomain(domainName: string, user: any = {}, free = false) {
    try {
      if (!domainName) {
        throw new HttpException(
          'Domain name cannot be empty',
          HttpStatus.BAD_REQUEST,
        );
      }

      // Check if domain is valid
      if (typeof domainName !== 'string' || !domainName.endsWith('.eth')) {
        throw new HttpException('Invalid domain name', HttpStatus.BAD_REQUEST);
      }

      if (!free) {
        const increaseCount = await this.userService.incrementSearchCount(
          user._id,
        );

        if (!increaseCount) {
          throw new HttpException(
            'Search Limit exceeded',
            HttpStatus.BAD_REQUEST,
          );
        }
      }

      const appraisalResult = await this.fetchAppraisal({ domainName });

      if (!appraisalResult) {
        throw new HttpException(
          'Something went wrong trying to appraise domain',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      // if (!appraisalResult.domainName) {
      //   appraisalResult = await this.rateDomain(domainName);
      // }

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
  }) {
    try {
      await this.ipService.create({ ip });

      // if (!ipCheck) {
      //   throw new HttpException('User limit exceeded', HttpStatus.BAD_REQUEST);
      // }
      return this.appraiseDomain(domainName, {}, true);
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
      // Initialize retry count and maximum retries
      // let retryCount = 0;
      // const maxRetries = 3;
      // const delay = 1000; // 1 second delay between retries
      let data: AppraisedData;

      // const axiosClient = axios.create({
      //   timeout: 30000,
      // });

      const proxyHost = 'p.webshare.io';
      const proxyPort = 80;
      const proxyUsername = 'qjobixba-rotate';
      const proxyPassword = '97dvpme9d8hm';

      const axiosClient = axios.create({
        timeout: 30000,
        proxy: {
          host: proxyHost,
          port: proxyPort,
          auth: {
            username: proxyUsername,
            password: proxyPassword,
          },
        },
      });

      // // Axios request interceptor
      // axiosClient.interceptors.request.use(
      //   (config) => {
      //     // Reset retry count for each new request
      //     retryCount = 0;
      //     return config;
      //   },
      //   (error) => Promise.reject(error),
      // );

      // // Axios response interceptor
      // axiosClient.interceptors.response.use(
      //   (response) => {
      //     // Check if the response contains an error object
      //     if (response.data && response.data.error && retryCount < maxRetries) {
      //       // Increment retry count
      //       retryCount++;

      //       // Delay and retry the request with modified uniqueID
      //       return new Promise((resolve) => {
      //         setTimeout(() => {
      //           const config = response.config;
      //           const newUniqueID = this.generateUniqueID();
      //           config.url = config.url.replace(
      //             /r=0\.\w+/,
      //             `r=0.${newUniqueID}`,
      //           );
      //           resolve(axios(config));
      //         }, delay);
      //       });
      //     }

      //     return response;
      //   },
      //   (error) => {
      //     // Check if the error can be retried and if the maximum retry count has been reached
      //     if (error.config && retryCount < maxRetries) {
      //       // Increment retry count
      //       retryCount++;

      //       // Delay and retry the request with modified uniqueID
      //       return new Promise((resolve) => {
      //         setTimeout(() => {
      //           const config = error.config;
      //           const newUniqueID = this.generateUniqueID();
      //           config.url = config.url.replace(
      //             /r=0\.\w+/,
      //             `r=0.${newUniqueID}`,
      //           );
      //           resolve(axios(config));
      //         }, delay);
      //       });
      //     }

      //     // Reject the promise if the error cannot be retried or maximum retries reached
      //     return Promise.reject(error);
      //   },
      // );

      // // Axios response interceptor
      // axiosClient.interceptors.response.use(
      //   (response) => {
      //     // Check if the response contains an error object
      //     if (response.data && response.data.error && retryCount < maxRetries) {
      //       // Increment retry count
      //       retryCount++;

      //       // Delay and retry the request
      //       return new Promise((resolve) => {
      //         setTimeout(() => {
      //           resolve(axios(response.config));
      //         }, delay);
      //       });
      //     }

      //     return response;
      //   },
      //   (error) => {
      //     // Check if the error can be retried and if the maximum retry count has been reached
      //     if (error.config && retryCount < maxRetries) {
      //       // Increment retry count
      //       retryCount++;

      //       // Delay and retry the request
      //       return new Promise((resolve) => {
      //         setTimeout(() => {
      //           resolve(axios(error.config));
      //         }, delay);
      //       });
      //     }

      //     // Reject the promise if the error cannot be retried or maximum retries reached
      //     return Promise.reject(error);
      //   },
      // );

      const uniqueID = this.generateUniqueID();
      await axiosClient
        .get(
          `http://www.domainsroom.com/api/domain-appraisal-free?domain=${domainName.slice(
            0,
            -4,
          )}&r=0.${uniqueID}`,
        )
        .then((res) => (data = res.data))
        .catch(async (error) => {
          console.log({ m: error.message });
          // if (axios.isCancel(error)) {
          data = await this.rateDomain(domainName);
          // } else {
          //   throw new HttpException(
          //     'Something went wrong trying to appraise domain',
          //     HttpStatus.INTERNAL_SERVER_ERROR,
          //   );
          // }
        });

      return data;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async getEthPrice() {
    try {
      // Make a GET request to the CoinGecko API to fetch Ethereum (ETH) price in USD
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/simple/price',
        {
          params: {
            ids: 'ethereum',
            vs_currencies: 'usd',
          },
        },
      );

      // Extract the Ethereum price from the response
      const ethPriceInUSD = response.data.ethereum.usd;

      return ethPriceInUSD;
    } catch (error) {
      // Handle any errors that may occur during the API request
      console.error('Error fetching Ethereum price:', error.message);
      throw error;
    }
  }

  private generateUniqueID(): string {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 999999);
    const uniqueID = `${timestamp}${String(randomNum).padStart(6, '0')}`;
    return uniqueID;
  }
}
