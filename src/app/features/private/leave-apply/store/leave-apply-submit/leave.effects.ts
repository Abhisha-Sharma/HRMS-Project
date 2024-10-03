import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  submitLeaveForm,
  submitLeaveFormFail,
  submitLeaveFormSuccess,
} from '../leave-apply-submit/leave.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { LeaveApplyApiService } from '../../services/api/leave-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class LeaveEffects {
  constructor(
    private action$: Actions,
    private leaveService: LeaveApplyApiService,
    private snackBar: MatSnackBar
  ) {}

  submitLeaveForm$ = createEffect(() =>
    this.action$.pipe(
      ofType(submitLeaveForm),
      switchMap((action) =>
        this.leaveService.addLeaveRequest(action.leaveData).pipe(
          map(({ message , leaveData}) => {
            this.snackBar.open(
              message,
              'Close',
              {
                horizontalPosition: 'start',
                verticalPosition: 'bottom',
                duration: 3000,
              }
            );
            return submitLeaveFormSuccess({ leaveData });
          }),
          catchError((error) => of(submitLeaveFormFail({ error })))
        )
      )
    )
  );
}
