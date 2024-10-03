import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { OnLeaveTomorrowService } from '../../services/onLeaveTomorrow/on-leave-tomorrow.service';
import {
  FETCH_EMPLOYEE_ON_LEAVE_TOMORROW,
  FETCH_EMPLOYEE_ON_LEAVE_TOMORROW_FAILURE,
  FETCH_EMPLOYEE_ON_LEAVE_TOMORROW_SUCCESS,
} from './onLeaveTomorrow.actions';

@Injectable()
export class onLeaveTomorrowEffect {
  fetchEmployeeOnLeaveToday = createEffect(() =>
    this.actions$.pipe(
      ofType(FETCH_EMPLOYEE_ON_LEAVE_TOMORROW),
      mergeMap(() =>
        this.onLeaveTomorrowService.getStaffsOnLeaveTomorrow().pipe(
          map((res) => {
            return FETCH_EMPLOYEE_ON_LEAVE_TOMORROW_SUCCESS({
              employeeOnLeaveTomorrow: res.data,
            });
          }),
          catchError((error) =>
            of(
              FETCH_EMPLOYEE_ON_LEAVE_TOMORROW_FAILURE({ error: error.message })
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private onLeaveTomorrowService: OnLeaveTomorrowService
  ) {}
}
