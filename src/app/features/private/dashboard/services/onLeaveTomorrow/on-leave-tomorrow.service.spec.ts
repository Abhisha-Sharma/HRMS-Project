import { TestBed } from '@angular/core/testing';

import { OnLeaveTomorrowService } from './on-leave-tomorrow.service';

describe('OnLeaveTomorrowService', () => {
  let service: OnLeaveTomorrowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnLeaveTomorrowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
