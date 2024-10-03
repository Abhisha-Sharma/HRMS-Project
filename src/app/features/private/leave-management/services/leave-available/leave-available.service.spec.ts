import { TestBed } from '@angular/core/testing';

import { LeaveAvailableService } from './leave-available.service';

describe('LeaveAvailableService', () => {
  let service: LeaveAvailableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveAvailableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
