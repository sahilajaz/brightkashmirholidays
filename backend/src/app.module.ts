import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RazorpayService } from './razorpay/razorpay.service';
import { RazorpayController } from './razorpay/razorpay.controller';
import { RazorpayModule } from './razorpay/razorpay.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { MailerModule , MailerOptions} from '@nestjs-modules/mailer';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath: '.env'
    }),
    RazorpayModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'travelagencydb',
      synchronize: true,
      autoLoadEntities: true,
    }),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService): MailerOptions => ({
        transport: {
          host: configService.get<string>('EMAIL_HOST'),
          port: configService.get<number>('EMAIL_PORT'),
          secure: false,
          auth: {
            user: configService.get<string>('EMAIL_USERNAME'),
            pass: configService.get<string>('EMAIL_PASSWORD')
          }
        }
      })
    }),
  ],
  controllers: [RazorpayController],
  providers: [RazorpayService],
})
export class AppModule {}
