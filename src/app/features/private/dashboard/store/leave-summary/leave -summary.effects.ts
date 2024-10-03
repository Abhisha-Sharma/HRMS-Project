import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LeaveSummaryService } from '../../services/leave-summary/leave-summary.service';
import {
  FETCH_LEAVE_REQUESTS,
  FETCH_LEAVE_REQUESTS_FAILURE,
  FETCH_LEAVE_REQUESTS_SUCCESS,
} from './leave-summary.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
@Injectable()
export class allUsersPendingLeaveRequestEffects {
  userRole = 'admin';

  fetchAllUsersPendingLeaveRequestData = createEffect(() =>
    this.actions$.pipe(
      ofType(FETCH_LEAVE_REQUESTS),
      mergeMap(() => {
        if (this.userRole === 'admin') {
          return this.leaveSummaryService
            .getAllUsersPendingLeaveRequests()
            .pipe(
              map((response) =>
                FETCH_LEAVE_REQUESTS_SUCCESS({
                  pendingLeaveRequestData: response.data,
                })
              ),
              catchError((error) =>
                of(FETCH_LEAVE_REQUESTS_FAILURE({ error: error.message }))
              )
            );
        } else {
          return of();
        }
      })
    )
  );

  constructor(
    private actions$: Actions,
    private leaveSummaryService: LeaveSummaryService
  ) {}
}
