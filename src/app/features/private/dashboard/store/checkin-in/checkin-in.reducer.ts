import { createReducer, on } from '@ngrx/store';
import { initialCheckedInStatusState } from './checkin-in.state';
import {
  FETCH_CHECKED_IN_STATUS,
  FETCH_CHECKED_IN_STATUS_FAILURE,
  FETCH_CHECKED_IN_STATUS_SUCCESS,
} from './checkin-in.actions';

export const checkCheckedInStatusReducer = createReducer(
  initialCheckedInStatusState,
  on(FETCH_CHECKED_IN_STATUS, (prevState) => ({
    ...prevState,
    loading: true,
    error: null,
  })),
  on(FETCH_CHECKED_IN_STATUS_SUCCESS, (prevState, { checkedInStatus }) => ({
    ...prevState,
    checkedInStatus,
    loading: false,
    error: null,
  })),
  on(FETCH_CHECKED_IN_STATUS_FAILURE, (prevState, { error }) => ({
    ...prevState,
    loading: false,
    error,
  }))
);
