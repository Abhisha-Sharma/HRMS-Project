import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changePassword } from '../../change-password/store/change-password.action';
import { changePasswordState } from '../../change-password/store/change-password.reducer';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm!: FormGroup;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  confirmPasswordMismatch = false;
  oldPassword!: FormControl;
  newPassword!: FormControl;
  confirmPassword!: FormControl;
  hideCurrent :boolean=true;
  hideNew : boolean=true;
  hideConfirm : boolean=true;


  constructor(private fb: FormBuilder, private store: Store<{ changePassword: changePasswordState }>, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });


    this.loading$ = this.store.pipe(select(state => state.changePassword.loading));
    this.error$ = this.store.pipe(select(state => state.changePassword.error));

    this.changePasswordForm.valueChanges.subscribe(() => {
      this.confirmPasswordMismatch = this.changePasswordForm.get('newPassword')?.value !== this.changePasswordForm.get('confirmPassword')?.value;
    });
  }

  onSubmit(): void {
    // console.log('hi i am here');
    if (this.changePasswordForm.valid && !this.confirmPasswordMismatch) {
      const { currentPassword, newPassword } = this.changePasswordForm.value;
      this.store.dispatch(changePassword({ currentPassword, newPassword }));
      this.openSnackBar('Password changed Successfully');
    }
  }

  toggleHideCurrent(){
    this.hideCurrent=!this.hideCurrent;
  }
  toggleHideNew(){
    this.hideNew=!this.hideNew;
  }
  toggleHideConfirm(){
    this.hideConfirm=!this.hideConfirm;
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Duration in milliseconds
      horizontalPosition: 'left', // Position of the snackbar
      verticalPosition: 'bottom', // Position of the snackbar
      panelClass: ['snack-bar'] // Custom class for styling
    });
  }
}
