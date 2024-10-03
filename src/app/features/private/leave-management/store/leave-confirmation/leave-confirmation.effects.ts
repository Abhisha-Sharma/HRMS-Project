import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LeaveConfirmationService } from '../../services/leave-confirmation/leave-confirmation.service';
import {
  FETCH_LEAVE_REQUEST_lIST,
  FETCH_LEAVE_REQUEST_lIST_FAIL,
  FETCH_LEAVE_REQUEST_lIST_SUCCESS,
} from './leave-confirmation.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { LeaveRequestList } from '../../types/leave-table';

@Injectable()
export class LeaveConfirmationEffects {
  leaveRequestList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FETCH_LEAVE_REQUEST_lIST),
      mergeMap(() =>
        this.leaveRequestListService.fetchRequestList().pipe(
          map((leaveRequestList: LeaveRequestList[]) =>
            FETCH_LEAVE_REQUEST_lIST_SUCCESS({ leaveRequestList })
          ),
          catchError((error) => of(FETCH_LEAVE_REQUEST_lIST_FAIL({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private leaveRequestListService: LeaveConfirmationService
  ) {}
}
