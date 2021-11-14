import { Test, TestingModule } from '@nestjs/testing';
import { BirthControlService } from './birth-control.service';

describe('BirthControlService', () => {
  let service: BirthControlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BirthControlService],
    }).compile();

    service = module.get<BirthControlService>(BirthControlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
