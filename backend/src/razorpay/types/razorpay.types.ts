export interface PaymentData {
  razorpay_payment_id: string;
  orderId: string;
}

export  interface EmailRequest {
  email: string;
  packageName: string;
  packagePrice: string;
  verificationRes: boolean
}

export interface DataForm {
   name: string;
   email: string;
   message: string;
}