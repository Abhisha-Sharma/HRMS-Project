import { TestBed } from '@angular/core/testing';

import { LeaveTypeDropdownService } from './leave-type-dropdown.service';

describe('LeaveTypeDropdownService', () => {
  let service: LeaveTypeDropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveTypeDropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
