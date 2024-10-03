import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FETCH_AVAILABLE_LEAVE_DATA, FETCH_AVAILABLE_LEAVE_DATA_FAILURE, FETCH_AVAILABLE_LEAVE_DATA_SUCCESS } from './leave-available.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { LeaveAvailableService } from '../../services/leave-available/leave-available.service';

@Injectable()
export class LeaveAvailableEffects {
  constructor(
    private action$: Actions,
    private leaveAvailableService: LeaveAvailableService
  ) {}

  loadAvailableLeaveData = createEffect(()=> 
    this.action$.pipe(
        ofType(FETCH_AVAILABLE_LEAVE_DATA),
        mergeMap(({employeeId})=> 
        this.leaveAvailableService.getLeaveAvailableData(employeeId).pipe(
            map(({ leaveBalanceData}) => {
                return FETCH_AVAILABLE_LEAVE_DATA_SUCCESS({ leaveBalanceData });
            }),
            catchError((error)=> 
            of(
                FETCH_AVAILABLE_LEAVE_DATA_FAILURE({
                    error: error.message,
                })
            ))
        )
    )
    )
)
}
