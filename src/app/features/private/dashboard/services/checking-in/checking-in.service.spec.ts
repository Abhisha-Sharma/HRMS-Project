import { TestBed } from '@angular/core/testing';

import { CheckingInService } from './checking-in.service';

describe('CheckingInService', () => {
  let service: CheckingInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckingInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
