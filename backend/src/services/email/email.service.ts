import {
  HttpException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import Mailgun, { Interfaces, Enums } from 'mailgun.js';
import * as FormData from 'form-data';
const mailgun = new Mailgun(FormData);

@Injectable()
export class EmailService {
  private mailgunClient: Interfaces.IMailgunClient;

  constructor() {
    this.mailgunClient = mailgun.client({
      username: 'api',
      key: '',
      public_key: '',
      timeout: 10000,
      url: '',
    });
  }

  async sendEmail() {
    try {
      const email = await this.mailgunClient.messages.create('domain', {
        from: '',
        to: [],
        subject: '',
        text: '',
        html: '',
      });

      console.log({ email });

      if (!email) {
        throw new InternalServerErrorException();
      }
      return email;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
