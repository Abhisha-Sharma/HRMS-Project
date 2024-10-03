import { TestBed } from '@angular/core/testing';

import { UpdateStaffService } from './update-staff.service';

describe('UpdateStaffService', () => {
  let service: UpdateStaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
