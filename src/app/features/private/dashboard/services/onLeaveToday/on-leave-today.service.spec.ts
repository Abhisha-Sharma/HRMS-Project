import { TestBed } from '@angular/core/testing';

import { OnLeaveTodayService } from './on-leave-today.service';

describe('OnLeaveTodayService', () => {
  let service: OnLeaveTodayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnLeaveTodayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
