import { Module } from '@nestjs/common';
import { IptrackService } from './iptrack.service';
import { IptrackController } from './iptrack.controller';
import { IPTrack, IPTrackSchema } from './entities/iptrack.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: IPTrack.name, schema: IPTrackSchema }]),
  ],
  controllers: [IptrackController],
  providers: [IptrackService],
  exports: [IptrackService],
})
export class IptrackModule {}
