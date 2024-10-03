import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DayLeaveDropdownService } from '../../services/day-leave-dropdown/day-leave-dropdown.service';
import { FETCH_DAY_LEAVE_DROPDOWN, FETCH_DAY_LEAVE_DROPDOWN_FAILURE, FETCH_DAY_LEAVE_DROPDOWN_SUCCESS } from './day-leave.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class DayLeaveDropdownEffects {
  constructor(
    private action$: Actions,
    private dayLeaveDropdownService: DayLeaveDropdownService,
  ) {}

  fetchDayLeaveDropdown = createEffect(() => 
this.action$.pipe(
    ofType(FETCH_DAY_LEAVE_DROPDOWN),
    mergeMap(() => 
    this.dayLeaveDropdownService.getDayLeaveDropdown().pipe(
        map((response) => {
          const dayLeaveDropdown = response.data
            return FETCH_DAY_LEAVE_DROPDOWN_SUCCESS({ dayLeaveDropdown })
        }),
        catchError((error) =>
          of(
            FETCH_DAY_LEAVE_DROPDOWN_FAILURE({
              error: error.message,
            })
          )
        )
    ))
))
}
