import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { FETCH_LEAVE_TYPE_DROPDOWN, FETCH_LEAVE_TYPE_DROPDOWN_FAILURE, FETCH_LEAVE_TYPE_DROPDOWN_SUCCESS } from './leave-type.action';
import { LeaveTypeDropdownService } from '@shared/services/leave-type-dropdown/leave-type-dropdown.service';

@Injectable()
export class LeaveTypeDropdownEffects {
  constructor(
    private action$: Actions,
    private leaveTypeDropDownService: LeaveTypeDropdownService,
  ) {}

  fetchDayLeaveDropdown = createEffect(() =>
this.action$.pipe(
    ofType(FETCH_LEAVE_TYPE_DROPDOWN),
    mergeMap(() =>
    this.leaveTypeDropDownService.getLeaveTypeDropdown().pipe(
        map((response) => {
          const leaveTypeDropdown = response.data
            return FETCH_LEAVE_TYPE_DROPDOWN_SUCCESS({ leaveTypeDropdown })
        }),
        catchError((error) =>
          of(
            FETCH_LEAVE_TYPE_DROPDOWN_FAILURE({
              error: error.message,
            })
          )
        )
    ))
))
}
