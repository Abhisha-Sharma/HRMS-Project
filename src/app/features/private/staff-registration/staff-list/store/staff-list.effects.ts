import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { StaffListService } from '../service/staff-list.service';
import * as StaffListActions from './staff-list.actions';
import {

  loadStaffList,
} from './staff-list.actions';
import { StaffList } from '../model/staff-list';
import { ResponseType } from '@shared/models/response.model';

@Injectable()
export class StaffListEffects {
  loadStaff$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStaffList),
      mergeMap(() =>
        this.staffListService.getStaffList().pipe(
          map((staff: ResponseType<StaffList[]>) =>
            StaffListActions.loadStaffListSuccess({ staff: staff.data })
          ),
          catchError((error) =>
            of(StaffListActions.loadStaffListFailure({ error: error.message }))
          )
        )
      )
    )
  );


  constructor(
    private actions$: Actions,
    private staffListService: StaffListService
  ) { }
}
