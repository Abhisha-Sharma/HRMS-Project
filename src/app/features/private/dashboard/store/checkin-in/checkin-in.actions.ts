import { createAction, props } from '@ngrx/store';

export const FETCH_CHECKED_IN_STATUS = createAction(
  '[Checked In Status] Fetch Checked In Status'
);

export const FETCH_CHECKED_IN_STATUS_SUCCESS = createAction(
  '[Checked In Status] Fetch Checked In Status Success',
  props<{ checkedInStatus: boolean }>()
);

export const FETCH_CHECKED_IN_STATUS_FAILURE = createAction(
  '[Checked In Status] Fetch Checked In Status Failure',
  props<{ error: string }>()
);
