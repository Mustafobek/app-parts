import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import {
  MAIL_SERVICE_HOST,
  MAIL_SERVICE_PASSWORD,
  MAIL_SERVICE_PORT,
  MAIL_SERVICE_USERNAME,
} from '../../constants';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: MAIL_SERVICE_HOST,
      port: MAIL_SERVICE_PORT,
      secure: true,
      auth: {
        user: MAIL_SERVICE_USERNAME,
        pass: MAIL_SERVICE_PASSWORD,
      },
    });
  }

  async mailActivationLink() {}

  async sendMail(to: string, subject: string, text?: string, html?: string) {
    try {
      await this.transporter.sendMail({
        from: `<${MAIL_SERVICE_USERNAME}>`,
        to,
        subject,
        text,
        html,
      });
    } catch (e) {

    }
  }
}
