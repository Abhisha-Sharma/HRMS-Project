import { TestBed } from '@angular/core/testing';

import { DayLeaveDropdownService } from './day-leave-dropdown.service';

describe('DayLeaveDropdownService', () => {
  let service: DayLeaveDropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayLeaveDropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
