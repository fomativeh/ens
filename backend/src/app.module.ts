import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards';
import { ConfigModule } from '@nestjs/config';

if (!process.env.MONGO_URL) throw new Error('Missing MONGO_URL');

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
  }), MongooseModule.forRoot(process.env.MONGO_URL), 
  AuthModule, 
  UserModule
],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: AtGuard }],
})
export class AppModule { } 
