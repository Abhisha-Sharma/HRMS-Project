import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AttendanceDetailsService } from '../service/attendance-details.service';

import {
  loadAttendanceList,
  loadAttendanceListSuccess,
  loadAttendanceListFailure,
} from './attendance-details.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AttendanceEffects {
  loadAttendanceList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAttendanceList),
      mergeMap(({ payload }) =>
        this.attendanceService.getAttendanceList(payload).pipe(
          map(response => loadAttendanceListSuccess({ response: response.data })),
          catchError(error => of(loadAttendanceListFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private attendanceService: AttendanceDetailsService
  ) { }
}
