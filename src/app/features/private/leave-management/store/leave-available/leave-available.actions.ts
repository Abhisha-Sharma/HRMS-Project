import { createAction, props } from '@ngrx/store';
import { LeaveBalanceData } from '../../types/leave-table';

export const FETCH_AVAILABLE_LEAVE_DATA = createAction(
  '[leave available] get leave available',
  props<{ employeeId: number }>()

);
export const FETCH_AVAILABLE_LEAVE_DATA_SUCCESS = createAction(
  '[leave available] get leave available success',
  props<{ leaveBalanceData: LeaveBalanceData[] }>()
);
export const FETCH_AVAILABLE_LEAVE_DATA_FAILURE = createAction(
  '[leave available] get leave available failure',
  props<{ error: string }>()
);
