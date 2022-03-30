import { TestBed } from '@angular/core/testing';

import { CroplossService } from './croploss.service';

describe('CroplossService', () => {
  let service: CroplossService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CroplossService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
