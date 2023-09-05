import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { IptrackModule } from './iptrack/iptrack.module';
import { PaymentService } from './services/payment/payment.service';
import { DomainModule } from './domain/domain.module';
import { SubscriptionService } from './services/subscription/subscription.service';
import { PlanModule } from './plan/plan.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { SeederService } from './services/seeder/seeder.service';
import { PlanService } from './plan/plan.service';
import { HashingService } from './services/hashing/hashing.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      process.env.DB_URL ||
        'mongodb+srv://dezy_dev:Password123@cluster0.q0mthib.mongodb.net/ens?retryWrites=true&w=majority',
    ),
    UserModule,
    IptrackModule,
    DomainModule,
    PlanModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PaymentService,
    SubscriptionService,
    SeederService,
    HashingService,
    // { provide: APP_GUARD, useClass: AtGuard },
  ],
})
export class AppModule {}
