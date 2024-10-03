import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { passwordMatchValidator } from '@shared/validators/passwordMatch/password-match.validator';
import { Router } from '@angular/router';
interface EmployeeDetails {
  id: number;
  firstName: string;
  lastName: string;
  middleName?: string;
  mobileNo: string;
  addressId: number;
  email: string;
  citizenshipNo: string;
  dob: string;
  departmentId: number;
  role: string;
  gender: number;
  nationality: string;
  startDate: string;
}
@Injectable({
  providedIn: 'root',
})
export class FormService {
  registrationForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  initializeForm(): void {
    this.registrationForm = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        middleName: [''],
        lastName: ['', [Validators.required]],
        mobileNo: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        dob: ['', [Validators.required]],
        address: ['', [Validators.required]],
        nationality: ['', [Validators.required]],
        citizenshipNo: ['', [Validators.required]],
        startDate: ['', [Validators.required]],
        departmentId: ['', [Validators.required]],
        role: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
        city: ['', [Validators.required]],
        country: ['', [Validators.required]],
      },
      { validators: [passwordMatchValidator()] }
    );
  }

  resetForm(): void {
    this.registrationForm.reset({
      firstName: '',
      middleName: '',
      lastName: '',
      mobileNo: '',
      gender: '',
      dob: '',
      address: '',
      nationality: '',
      citizenshipNo: '',
      startDate: '',
      departmentId: '',
      role: '',
      email: '',
      password: '',
      confirmPassword: '',
      city: '',
      country: ''
    });
  }

  nagivateTo(): void {
    this.router.navigate(['/admin/staff-registration/staff-list']);

  }
  getFormValueToPatch(value: any): void {
    console.log(value)
    if (value) this.registrationForm.patchValue(value); //TODO: emty value is being patched
    this.registrationForm.updateValueAndValidity()
  }
}
