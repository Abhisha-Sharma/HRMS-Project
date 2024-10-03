import { TestBed } from '@angular/core/testing';

import { StaffListService } from './staff-list.service';
import { baseUrl } from '../../../../../shared/constants/global.constants';
import { apiConstants } from '../../../../../shared/constants/api.constants';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('StaffListService', () => {
  let service: StaffListService;
  let httpMock: HttpTestingController;
  const apiUrl = `${baseUrl}${apiConstants.getEmployeeList}`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // imports: [HttpClientTestingModule],
      // providers: [StaffListService]
    });
    service = TestBed.inject(StaffListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
