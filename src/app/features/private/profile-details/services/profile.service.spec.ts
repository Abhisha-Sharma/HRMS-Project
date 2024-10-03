import { TestBed } from '@angular/core/testing';

import { ProfileDetiailsService } from './profile.service';

describe('ProfileDetiailsService', () => {
  let service: ProfileDetiailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileDetiailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
