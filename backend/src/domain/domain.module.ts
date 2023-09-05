import { Module } from '@nestjs/common';
import { DomainService } from './domain.service';
import { DomainController } from './domain.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Domain, DomainSchema } from './entities/domain.schema';
import { IptrackModule } from 'src/iptrack/iptrack.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Domain.name, schema: DomainSchema }]),
    IptrackModule,
    UserModule,
  ],
  controllers: [DomainController],
  providers: [DomainService],
  exports: [DomainService],
})
export class DomainModule {}
