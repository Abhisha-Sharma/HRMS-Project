import { TestBed } from '@angular/core/testing';

import { LeaveApplyApiService } from './leave-api.service';

describe('LeaveApplyApiService', () => {
  let service: LeaveApplyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveApplyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
