import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { OnLeaveTodayService } from '../../services/onLeaveToday/on-leave-today.service';
import {
  FETCH_EMPLOYEE_ON_LEAVE_TODAY,
  FETCH_EMPLOYEE_ON_LEAVE_TODAY_FAILURE,
  FETCH_EMPLOYEE_ON_LEAVE_TODAY_SUCCESS,
} from './onLeaveToday.actions';

@Injectable()
export class onLeaveTodayEffect {
  fetchEmployeeOnLeaveToday = createEffect(() =>
    this.actions$.pipe(
      ofType(FETCH_EMPLOYEE_ON_LEAVE_TODAY),
      mergeMap(() =>
        this.onLeaveTodayService.getStaffsOnLeaveToday().pipe(
          map((res) => {
            return FETCH_EMPLOYEE_ON_LEAVE_TODAY_SUCCESS({
              employeeOnLeaveToday: res.data,
            });
          }),
          catchError((error) =>
            of(FETCH_EMPLOYEE_ON_LEAVE_TODAY_FAILURE({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private onLeaveTodayService: OnLeaveTodayService
  ) {}
}
