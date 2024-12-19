import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';
import { MailerService } from '@nestjs-modules/mailer';
import { EmailRequest } from "./types/razorpay.types";
const Razorpay = require('razorpay');

@Injectable()
export class RazorpayService {
  private razorPay: any;
  private keySecret: string;

  constructor(
    private config: ConfigService,
    private readonly mailService: MailerService,
  ) {
    this.razorPay = new Razorpay({
      key_id: config.get('RAZORPAY_ID'),
      key_secret: config.get('RAZORPAY_SECRET_KEY'),
    });
    this.keySecret = config.get('RAZORPAY_SECRET_KEY');
  }

  async createOrder(amount: number, currency: string) {
    const options = {
      amount: amount,
      currency,
      receipt: `receipt_${new Date().getTime()}`,
    };
    return this.razorPay.orders.create(options);
  }

  verifyPayment(
    razorpay_payment_id: string,
    orderId: string,
    razorpaySignature: string,
  ): boolean {
    const body = `${orderId}|${razorpay_payment_id}`;
    const generatedSignature = crypto
      .createHmac('sha256', this.keySecret)
      .update(body)
      .digest('hex');
    return generatedSignature === razorpaySignature;
  }

  async sendMail(emailRequest : EmailRequest) {
    const message = `Your payment ${emailRequest.verificationRes === true ? `, RS ${emailRequest.packagePrice}` : ''} for the ${emailRequest.packageName} package was ${emailRequest.verificationRes === true ? 'Successful' : 'failed'}`;

    return await this.mailService.sendMail({
      from: 'hello@demomailtrap.com',
      to: emailRequest.email,
      subject: 'Payment status',
      text: message,
    });
  }
}
