import { Test, TestingModule } from '@nestjs/testing';
import { BirthControlController } from './birth-control.controller';

describe('BirthControlController', () => {
  let controller: BirthControlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BirthControlController],
    }).compile();

    controller = module.get<BirthControlController>(BirthControlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
