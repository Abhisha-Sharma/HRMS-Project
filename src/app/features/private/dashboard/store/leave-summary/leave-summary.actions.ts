import { createAction, props } from '@ngrx/store';
import { LeaveRequests } from '../../types/leave-summary.interface';

export const FETCH_LEAVE_REQUESTS = createAction(
  '[Leave Requests] Fetch Leave Requests'
);

export const FETCH_LEAVE_REQUESTS_SUCCESS = createAction(
  '[Leave Requests] Fetch Leave Requests Success',
  props<{ pendingLeaveRequestData: LeaveRequests[] }>()
);

export const FETCH_LEAVE_REQUESTS_FAILURE = createAction(
  '[Leave Requests] Fetch Leave Requests Failure',
  props<{ error: string }>()
);
