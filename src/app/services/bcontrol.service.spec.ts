import { TestBed } from '@angular/core/testing';

import { BcontrolService } from './bcontrol.service';

describe('BcontrolService', () => {
  let service: BcontrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BcontrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
