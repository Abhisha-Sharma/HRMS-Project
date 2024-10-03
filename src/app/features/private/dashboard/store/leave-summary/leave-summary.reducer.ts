import { createReducer, on } from '@ngrx/store';
import { initialAllUsersPendingLeaveRequestState } from './leave-summary.state';
import {
  FETCH_LEAVE_REQUESTS,
  FETCH_LEAVE_REQUESTS_FAILURE,
  FETCH_LEAVE_REQUESTS_SUCCESS,
} from './leave-summary.actions';

export const allUsersPendingLeaveRequestsReducer = createReducer(
  initialAllUsersPendingLeaveRequestState,
  on(FETCH_LEAVE_REQUESTS, (prevState) => ({
    ...prevState,
    loading: true,
    error: null,
  })),
  on(
    FETCH_LEAVE_REQUESTS_SUCCESS,
    (prevState, { pendingLeaveRequestData }) => ({
      ...prevState,
      pendingLeaveRequestData,
      loading: false,
    })
  ),
  on(FETCH_LEAVE_REQUESTS_FAILURE, (prevState, { error }) => ({
    ...prevState,
    loading: false,
    error,
  }))
);
