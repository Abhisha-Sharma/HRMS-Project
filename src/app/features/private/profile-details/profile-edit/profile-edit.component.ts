import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.scss',
})
export class ProfileEditComponent {
  constructor(private fb: FormBuilder) { }

  editProfileForm = this.fb.group({
    firstName: ['', Validators.required],
    midName: ['', Validators.required],
    lastName: ['', Validators.required],
    gender: ['', Validators.required],
    dob: ['', Validators.required],
    address: ['', Validators.required],
    nationality: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    // citizenshipNo: ['',Validators.required],
    // department: ['',Validators.required],
    // role: ['',Validators.required],
  });

  onSubmit(): void {
    // console.log('submitted form', this.editProfileForm.value);
  }
}
