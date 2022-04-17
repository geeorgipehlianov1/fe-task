import { TestBed } from '@angular/core/testing';

import { BgnService } from './bgn.service';

describe('BgnService', () => {
  let service: BgnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BgnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
