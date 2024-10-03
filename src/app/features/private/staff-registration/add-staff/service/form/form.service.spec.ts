import { TestBed } from '@angular/core/testing';

import { FormService } from './form.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator } from '../../../../../../shared/validators/passwordMatch/password-match.validator';

describe('FormService', () => {
  let service: FormService;
  let formBuilder: FormBuilder;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [
        FormService,
        formBuilder,
        { provide: Router, useValue: spy }
      ]
    });
    service = TestBed.inject(FormService);
    formBuilder = TestBed.inject(FormBuilder);
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  describe('initializeForm', () => {
    it('should initialize the registration form with the correct controls and validators', () => {
      service.initializeForm();

      expect(service.registrationForm).toBeDefined();
      expect(service.registrationForm.contains('firstName')).toBeTrue();
      expect(service.registrationForm.contains('middleName')).toBeTrue();
      expect(service.registrationForm.contains('lastName')).toBeTrue();
      expect(service.registrationForm.contains('mobileNo')).toBeTrue();
      expect(service.registrationForm.contains('gender')).toBeTrue();
      expect(service.registrationForm.contains('dob')).toBeTrue();
      expect(service.registrationForm.contains('address')).toBeTrue();
      expect(service.registrationForm.contains('nationality')).toBeTrue();
      expect(service.registrationForm.contains('citizenshipNo')).toBeTrue();
      expect(service.registrationForm.contains('startDate')).toBeTrue();
      expect(service.registrationForm.contains('department')).toBeTrue();
      expect(service.registrationForm.contains('role')).toBeTrue();
      expect(service.registrationForm.contains('email')).toBeTrue();
      expect(service.registrationForm.contains('password')).toBeTrue();
      expect(service.registrationForm.contains('confirmPassword')).toBeTrue();
      expect(service.registrationForm.contains('cityId')).toBeTrue();
      expect(service.registrationForm.contains('countryId')).toBeTrue();

      const passwordControl = service.registrationForm.get('password');
      expect(passwordControl?.hasValidator(Validators.required)).toBeTrue();
      expect(passwordControl?.hasValidator(Validators.minLength(6))).toBeTrue();

      const emailControl = service.registrationForm.get('email');
      expect(emailControl?.hasValidator(Validators.email)).toBeTrue();

      expect(service.registrationForm.hasValidator(passwordMatchValidator)).toBeTrue();
    });
  });
  describe('resetForm', () => {
    it('should reset the form', () => {
      service.initializeForm();
      service.registrationForm.patchValue({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com'
      });

      service.resetForm();

      expect(service.registrationForm.value.firstName).toBeNull();
      expect(service.registrationForm.value.lastName).toBeNull();
      expect(service.registrationForm.value.email).toBeNull();
    });
  });
  describe('navigateTo', () => {
    it('should navigate to the staff list', () => {
      service.nagivateTo();
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/admin/staff-registration/staff-list']);
    });
  });
});
