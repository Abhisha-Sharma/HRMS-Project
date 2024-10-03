import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  FETCH_TODAY_ATTENDANCE_SUMMARY,
  FETCH_TODAY_ATTENDANCE_SUMMARY_FAILURE,
  FETCH_TODAY_ATTENDANCE_SUMMARY_SUCCESS,
} from './today-attendance.actions';
import { TodaysAttendanceService } from '../../services/todays-attendance/todays-attendance.service';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class TodayAttendanceSummaryEffect {
  fetchTodayAttendanceSummary$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FETCH_TODAY_ATTENDANCE_SUMMARY),
      mergeMap(() =>
        this.todayAttendanceSummaryService.getTodaysAttendanceSummary().pipe(
          map((res) => {
            return FETCH_TODAY_ATTENDANCE_SUMMARY_SUCCESS({
              attendanceData: res.data,
            });
          }),
          catchError((error) =>
            of(FETCH_TODAY_ATTENDANCE_SUMMARY_FAILURE({ error: error.message }))
          )
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private todayAttendanceSummaryService: TodaysAttendanceService
  ) {}
}
