import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  loadAttendanceListById,
  loadAttendanceListByIdFailure,
  loadAttendanceListByIdSuccess,
} from './attendance-details-by-id.actions';
import { AttendanceDetailsService } from '../../attendance-details/service/attendance-details.service';
import { calendarViewUtils } from '../utils/calendar-view.utils';

@Injectable()
export class AttendanceByIdEffects {
  loadAttendanceListById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAttendanceListById),
      mergeMap(({ payload }) =>
        this.attendanceService.getAttendanceListById(payload).pipe(
          map((response) => {
            // console.log('effects', response);
            const calendarData = calendarViewUtils(response.data.data);
            // console.log(calendarData, 'effects');
            return loadAttendanceListByIdSuccess({
              response: response.data,
              calendarData,
            });
          }),
          catchError((error) =>
            of(loadAttendanceListByIdFailure({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private attendanceService: AttendanceDetailsService
  ) {}
}
