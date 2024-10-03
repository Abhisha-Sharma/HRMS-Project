import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DetailsService } from '../service/details.service';
import { fetchLeaveDetails, fetchLeaveDetailsFailure, fetchLeaveDetailsSuccess } from './leave-details.actions';

@Injectable()
export class LeaveEffects {

  constructor(
    private actions$: Actions,
    private detailsService: DetailsService
  ) {}

  fetchLeaveDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchLeaveDetails),
      mergeMap(() =>
        this.detailsService.fetchAllLeaveBalanceDetails().pipe(
          map(leaveDetails => fetchLeaveDetailsSuccess({ leaveDetails })),
          catchError(error => of(fetchLeaveDetailsFailure({ error: error.message })))
        )
      )
    )
  );
}
