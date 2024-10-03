import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ResponseType } from '../../../../../../shared/models/response.model';
import { RegisterStaffPayload } from '../../model/add-staff';
import { AddStaffService } from './add-staff.service';

fdescribe('AddStaffService', () => {
  let service: AddStaffService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['post']);

    TestBed.configureTestingModule({
      providers: [
        AddStaffService,
        { provide: HttpClient, useValue: spy }
      ],
    });
    service = TestBed.inject(AddStaffService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should post staff details and return the response', () => {
    const dummyStaff: RegisterStaffPayload = {
      firstName: 'John',
      lastName: 'Doe',
      middleName: 'A.',
      mobileNo: '98545354675765',
      address: {
        name: '123 Main St',
        countryId: 1,
        cityId: 2,
      },
      email: 'john.doe@example.com',
      citizenshipNo: '1234567',
      dob: '1990-01-01',
      departmentId: 1,
      role: 1,
      gender: 1,
      nationality: 'Nepali',
      startDate: '2023-01-01',
      password: 'password',
      confirmPassword: 'password',

    };

    const dummyResponse: ResponseType<boolean> = {
      result: 300,
      data: true,
      message: 'Staff registered successfully',
    };

    httpClientSpy.post.and.returnValue(of(dummyResponse));

    service.postStaff(dummyStaff).subscribe((response) => {
      expect(response).toEqual(dummyResponse);
    });

    expect(httpClientSpy.post.calls.count()).toBe(1);
    expect(httpClientSpy.post.calls.mostRecent().args[0]).toBe(`${service['apiUrl']}`);
    expect(httpClientSpy.post.calls.mostRecent().args[1]).toEqual(dummyStaff);
  });
});
