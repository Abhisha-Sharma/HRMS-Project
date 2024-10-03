import { Injectable } from '@angular/core';
import { LeaveConfirmationService } from '../../service/leave-confirmation.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  LEAVE_ACCEPT_REJECT,
  LEAVE_ACCEPT_REJECT_FAILURE,
  LEAVE_ACCEPT_REJECT_SUCCESS,
} from './leave-card.action';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class LeaveAcceptRejectEffects {
  leaveAcceptReject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LEAVE_ACCEPT_REJECT),
      mergeMap((action) =>
        this.service.leaveAcceptReject(action.id, action.option).pipe(
          map((response) => LEAVE_ACCEPT_REJECT_SUCCESS({ response })),
          catchError((error) => of(LEAVE_ACCEPT_REJECT_FAILURE({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private service: LeaveConfirmationService
  ) {}
}
