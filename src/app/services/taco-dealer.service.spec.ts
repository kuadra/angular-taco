import { TestBed } from '@angular/core/testing';

import { TacoDealerService } from './taco-dealer.service';

describe('TacoDealerService', () => {
  let service: TacoDealerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TacoDealerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
