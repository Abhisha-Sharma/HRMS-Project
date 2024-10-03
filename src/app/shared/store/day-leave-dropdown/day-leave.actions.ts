import { createAction, props } from '@ngrx/store';
import { DayLeaveDropdown } from './day-leave.state';

export const FETCH_DAY_LEAVE_DROPDOWN = createAction(
  '[day leave dropdown] fetch'
);
export const FETCH_DAY_LEAVE_DROPDOWN_SUCCESS = createAction(
  '[day leave dropdown] fetch success',
  props<{ dayLeaveDropdown: DayLeaveDropdown[] }>()
);
export const FETCH_DAY_LEAVE_DROPDOWN_FAILURE = createAction(
  '[day leave dropdown] fetch fail',
  props<{ error: string | null }>()
);
