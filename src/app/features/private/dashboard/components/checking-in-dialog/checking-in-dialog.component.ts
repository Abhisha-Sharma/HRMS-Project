import { TodayAttendanceSummary } from './../../types/todays-attendance.interface';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CheckingInService } from '../../services/checking-in/checking-in.service';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { CheckedInStatusState } from '../../store/checkin-in/checkin-in.state';
import {
  FETCH_CHECKED_IN_STATUS,
  FETCH_CHECKED_IN_STATUS_SUCCESS,
} from '../../store/checkin-in/checkin-in.actions';
import { FETCH_TODAY_ATTENDANCE_SUMMARY } from '../../store/todays-attendance/today-attendance.actions';
@Component({
  selector: 'app-checking-in-dialog',
  templateUrl: './checking-in-dialog.component.html',
  styleUrl: './checking-in-dialog.component.scss',
})
export class CheckingInDialogComponent {
  isCheckedIn: boolean;
  isLoading: boolean = false;
  isCheckOutLoading: boolean = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { isCheckedIn: boolean },
    public dialogRef: MatDialogRef<CheckingInDialogComponent>,
    private checkInService: CheckingInService,
    private snackBar: MatSnackBar,
    private checkInStatusStore: Store<CheckedInStatusState>,
    private todayAttendanceSummary: Store<TodayAttendanceSummary>
  ) {
    this.isCheckedIn = data.isCheckedIn;
  }

  get checkInForm(): FormGroup {
    return this.checkInService.checkInForm;
  }

  get checkOutForm(): FormGroup {
    return this.checkInService.checkOutForm;
  }

  ngOnInit(): void {
    this.checkInForm.reset();
  }

  // onConfirm(): void {
  //   this.dialogRef.close(true);
  //   this.checkInForm.reset();
  // }

  onCancel(): void {
    this.dialogRef.close(false);
    this.checkInForm.reset();
    this.checkOutForm.reset();
  }
  onCheckInSubmit(): void {
    if (this.checkInForm.invalid) {
      this.checkInForm.markAllAsTouched();
      return;
    } else {
      // console.log(this.checkInForm.value);
      this.isLoading = true;
      this.checkInService
        .postCheckedInMessage(this.checkInForm.value)
        .subscribe({
          next: (res) => {
            // console.log(res);
            this.isLoading = true;
            this.dialogRef.close();
            this.checkInStatusStore.dispatch(
              FETCH_CHECKED_IN_STATUS_SUCCESS({ checkedInStatus: true })
            );
            this.checkInStatusStore.dispatch(FETCH_TODAY_ATTENDANCE_SUMMARY());

            this.snackBar.open(
              'Successfully Checked-In, Attendance Created',
              'Close',
              {
                duration: 5000,
                horizontalPosition: 'right',
                verticalPosition: 'bottom',
              }
            );
          },
          error: (err) => {
            // console.log(err);
            this.isLoading = false;
            this.snackBar.open(
              'Could not Check-In, Please Try Again!',
              'Close',
              {
                duration: 5000,
                horizontalPosition: 'right',
                verticalPosition: 'bottom',
              }
            );
          },
          complete: () => {
            // console.log('completed');
          },
        });
    }
  }

  onCheckOutSubmit(): void {
    if (this.checkOutForm.invalid) {
      this.checkOutForm.markAllAsTouched();
      return;
    } else {
      this.isCheckOutLoading = true;
      this.checkInService
        .postCheckOutMessage(this.checkOutForm.value)
        .subscribe({
          next: (res) => {
            // console.log(res);
            this.isCheckOutLoading = true;
            this.dialogRef.close();
            this.checkInStatusStore.dispatch(
              FETCH_CHECKED_IN_STATUS_SUCCESS({ checkedInStatus: false })
            );
            this.snackBar.open('Successfully Checked-Out!', 'Close', {
              duration: 5000,
              horizontalPosition: 'right',
              verticalPosition: 'bottom',
            });
          },
          error: (err) => {
            // console.log(err);
            this.isCheckOutLoading = false;
            this.snackBar.open(
              'Could not Check-Out, Please Try Again!',
              'Close',
              {
                duration: 5000,
                horizontalPosition: 'right',
                verticalPosition: 'bottom',
              }
            );
          },
          complete: () => {
            // console.log('completed');
          },
        });
    }
  }
}
