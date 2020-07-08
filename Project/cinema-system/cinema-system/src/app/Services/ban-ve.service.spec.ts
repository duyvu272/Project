import { TestBed } from '@angular/core/testing';

import { BanVeService } from './ban-ve.service';

describe('BanVeService', () => {
  let service: BanVeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BanVeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
