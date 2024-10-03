import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as OtpActions from './Store/OTP.actions'
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss'
})
export class OTPComponent implements OnInit{
  otpForm! : FormGroup;

constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
    });
  }

  onSubmit() {
    // console.log("hi");
    if (this.otpForm.valid) {
      const otp = this.otpForm.get('otp')?.value;
      this.store.dispatch(OtpActions.verifyOtp({ otp }));
    }
  }
  validateInput(event: KeyboardEvent) {
    const pattern = /^[0-9]$/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}

