import { createAction, props } from '@ngrx/store';
import { LeaveStatus } from '../../types/leave-summary.interface';

export const FETCH_EMPLOYEE_ON_LEAVE_TODAY = createAction(
  '[Employee on Leave Today] Fetch Employee on Leave Today'
);

export const FETCH_EMPLOYEE_ON_LEAVE_TODAY_SUCCESS = createAction(
  '[Employee on Leave Today] Fetch Employee on Leave Today Success',
  props<{ employeeOnLeaveToday: LeaveStatus[] }>()
);

export const FETCH_EMPLOYEE_ON_LEAVE_TODAY_FAILURE = createAction(
  '[Employee on Leave Today] Fetch Employee on Leave Today Success',
  props<{ error: string }>()
);
