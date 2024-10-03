import { createAction, props } from '@ngrx/store';
import { LeaveTypeDropdown } from './leave-type.state';

export const FETCH_LEAVE_TYPE_DROPDOWN = createAction(
  '[leave type dropdown] fetch'
);
export const FETCH_LEAVE_TYPE_DROPDOWN_SUCCESS = createAction(
  '[leave type dropdown] fetch success',
  props<{ leaveTypeDropdown: LeaveTypeDropdown[] }>()
);
export const FETCH_LEAVE_TYPE_DROPDOWN_FAILURE = createAction(
  '[leave type dropdown] fetch fail',
  props<{ error: string | null }>()
);