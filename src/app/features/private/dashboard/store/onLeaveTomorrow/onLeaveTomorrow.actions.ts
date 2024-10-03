import { createAction, props } from '@ngrx/store';
import { LeaveStatus } from '../../types/leave-summary.interface';

export const FETCH_EMPLOYEE_ON_LEAVE_TOMORROW = createAction(
  '[Employee on Leave Tomorrow] Fetch Employee on Leave Tomorrow'
);

export const FETCH_EMPLOYEE_ON_LEAVE_TOMORROW_SUCCESS = createAction(
  '[Employee on Leave Tomorrow] Fetch Employee on Leave Tomorrow Success',
  props<{ employeeOnLeaveTomorrow: LeaveStatus[] }>()
);

export const FETCH_EMPLOYEE_ON_LEAVE_TOMORROW_FAILURE = createAction(
  '[Employee on Leave Tomorrow] Fetch Employee on Leave Tomorrow Success',
  props<{ error: string }>()
);
