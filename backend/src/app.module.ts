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

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    UserModule,
    IptrackModule,
    DomainModule,
    PlanModule,
  ],
  controllers: [AppController],
  providers: [AppService, PaymentService, SubscriptionService],
})
export class AppModule {}
