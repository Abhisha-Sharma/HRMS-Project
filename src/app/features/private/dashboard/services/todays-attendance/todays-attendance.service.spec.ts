import { TestBed } from '@angular/core/testing';

import { TodaysAttendanceService } from '../todays-attendance.service';

describe('TodaysAttendanceService', () => {
  let service: TodaysAttendanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodaysAttendanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
