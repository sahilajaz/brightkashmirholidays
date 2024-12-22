import {
  Controller,
  Post,
  Body,
  Headers,
  BadRequestException,
  HttpCode,
  HttpStatus,
  InternalServerErrorException,
  Res
} from "@nestjs/common";
import { RazorpayService } from './razorpay.service';
import e, { Response } from 'express';
import { DataForm, EmailRequest } from "./types/razorpay.types";



@Controller('razorpay')
export class RazorpayController {
  constructor(private readonly razorPayService: RazorpayService) {}


  @Post('create-order')
  @HttpCode(HttpStatus.CREATED)
  async createOrder(@Body() body: { amount: number; currency: string }): Promise<{ success: boolean; order: any }> {
    const { amount, currency } = body;


    if (!amount || amount < 1) throw new BadRequestException('Invalid amount');
    if (!currency) throw new BadRequestException('Currency is required');

    try {

      const order = await this.razorPayService.createOrder(amount, currency);
      return { success: true, order };
    } catch (error) {
      console.error('Error creating order:', error);
      throw new BadRequestException(error.message);
    }
  }

  @Post('verify-payment')
  async verifyPayment(
    @Body() paymentData: { razorpay_payment_id: string; orderId: string },
    @Headers('razorpay_signature') razorpaySignature: string,
  ): Promise<{ success: boolean; message: string }> {
    const { razorpay_payment_id, orderId } = paymentData;
    if (!razorpay_payment_id || !orderId) {
      throw new BadRequestException('Payment ID and Order ID are required');
    }
    if (!razorpaySignature) {
      throw new BadRequestException('Signature header is required');
    }

    try {
      const isVerified = this.razorPayService.verifyPayment(razorpay_payment_id, orderId, razorpaySignature);
      if (isVerified) {
        return { success: true, message: 'Payment successfully verified' };
      } else {
        return { success: false, message: 'Signature mismatch' };
      }
    } catch (error) {
      console.error('Error during payment verification:', error.message);
      throw new InternalServerErrorException('Payment verification failed');
    }
  }

  @Post('mail')
  async senMail(@Body() emailRequest : EmailRequest ,@Res() response : Response){

    try {
      const mail = await this.razorPayService.sendMail(emailRequest)
      return response.status(200).json({
        success: true,
        mail
      })
    }
    catch (error) {
      console.error('Error during sendMail:', error);
      return response.status(500).json({
        success: false,
        message: 'failed to send mail',
      })
    }
  }

  @Post('customer-query')
  async sendMailFromCustomer(@Body() dataForm  : DataForm , @Res() response : Response) {
       try {
          const msg = await this.razorPayService.mailFromCusomer(dataForm)
          return response.status(200).json({
            success: true,
            msg
          })
       } catch (error) {
         console.error(error)
       }
  }
}
