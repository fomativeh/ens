import { Test, TestingModule } from '@nestjs/testing';
import { IptrackService } from './iptrack.service';

describe('IptrackService', () => {
  let service: IptrackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IptrackService],
    }).compile();

    service = module.get<IptrackService>(IptrackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
