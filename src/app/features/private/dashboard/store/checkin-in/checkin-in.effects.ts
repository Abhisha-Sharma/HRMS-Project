import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  FETCH_CHECKED_IN_STATUS,
  FETCH_CHECKED_IN_STATUS_FAILURE,
  FETCH_CHECKED_IN_STATUS_SUCCESS,
} from './checkin-in.actions';
import { CheckingInService } from '../../services/checking-in/checking-in.service';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class CheckCheckedInStatusEffects {
  fetchCheckCheckedInStatusData = createEffect(() =>
    this.actions$.pipe(
      ofType(FETCH_CHECKED_IN_STATUS),
      mergeMap(() =>
        this.checkingInService.getCheckInStatus().pipe(
          map((response) =>
            FETCH_CHECKED_IN_STATUS_SUCCESS({
              checkedInStatus: response.data,
            })
          ),
          catchError((error) =>
            of(FETCH_CHECKED_IN_STATUS_FAILURE({ error: error.message }))
          )
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private checkingInService: CheckingInService
  ) {}
}
