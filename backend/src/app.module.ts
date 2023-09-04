import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { IptrackModule } from './iptrack/iptrack.module';
import { PaymentService } from './payment/payment.service';
import { DomainModule } from './domain/domain.module';
import { SubscriptionService } from './subscription/subscription.service';
import { PlanModule } from './plan/plan.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://localhost/nest'),
    UserModule,
    IptrackModule,
    DomainModule,
    PlanModule,
  ],
  controllers: [AppController],
  providers: [AppService, PaymentService, SubscriptionService, { provide: APP_GUARD, useClass: AtGuard }],
})
export class AppModule { } 
