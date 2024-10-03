import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadDashboard,
  loadDashboardFailure,
  loadDashboardSuccess,
} from './dashboard.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { DashboardService } from '../../services/dashboard/dashboard.service';
@Injectable()
export class DashboardEffect {
  loadStaff$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDashboard),
      mergeMap(() =>
        this.dashboardService.getDashbaordData().pipe(
          map((dashboard) => loadDashboardSuccess({ dashboard })),
          catchError((error) =>
            of(loadDashboardFailure({ error: error.message }))
          )
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private dashboardService: DashboardService
  ) {}
}
