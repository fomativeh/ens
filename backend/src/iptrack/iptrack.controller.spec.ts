import { Test, TestingModule } from '@nestjs/testing';
import { IptrackController } from './iptrack.controller';
import { IptrackService } from './iptrack.service';

describe('IptrackController', () => {
  let controller: IptrackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IptrackController],
      providers: [IptrackService],
    }).compile();

    controller = module.get<IptrackController>(IptrackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
