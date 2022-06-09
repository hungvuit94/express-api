import { Test, TestingModule } from '@nestjs/testing';
import { TermAndCondService } from './term-and-cond.service';

describe('TermAndCondService', () => {
  let service: TermAndCondService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TermAndCondService],
    }).compile();

    service = module.get<TermAndCondService>(TermAndCondService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
