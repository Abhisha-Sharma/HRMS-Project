import { TestBed } from '@angular/core/testing';

import { LeaveConfirmationService } from './leave-confirmation.service';

describe('LeaveConfirmationService', () => {
  let service: LeaveConfirmationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveConfirmationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
