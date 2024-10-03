import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  fetchCalenderData,
  fetchCalenderDataSuccess,
  fetchCalenderDataFailure,
} from './calender.actions';
import { CalenderService } from '../../services/calender/calender.service';

@Injectable()
export class CalenderEffects {
  constructor(
    private actions$: Actions,
    private calenderService: CalenderService
  ) {}

  // fetchCalenderData$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(fetchCalenderData),
  //     switchMap(action =>
  //       this.calenderService.fetchCalenderData(action.data, action.id).pipe(
  //         map(calenderData => fetchCalenderDataSuccess({ calenderData })),
  //         catchError(error => of(fetchCalenderDataFailure({ error: error.message })))
  //       )
  //     )
  //   )
  // );

  fetchCalenderData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCalenderData),
      switchMap((action) =>
        this.calenderService.fetchCalenderData(action.data, action.id).pipe(
          // Log the calendar data
          // tap((calenderData) =>
          //   console.log('Fetched Calendar Data:', calenderData)
          // ),
          map((calenderData) => fetchCalenderDataSuccess({ calenderData })),
          catchError((error) =>
            of(fetchCalenderDataFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
