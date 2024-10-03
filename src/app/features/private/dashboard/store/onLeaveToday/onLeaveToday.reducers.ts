import { createReducer, on } from '@ngrx/store';
import { initialEmployeeOnLeaveToday } from './onLeaveToday.state';
import {
  FETCH_EMPLOYEE_ON_LEAVE_TODAY,
  FETCH_EMPLOYEE_ON_LEAVE_TODAY_FAILURE,
  FETCH_EMPLOYEE_ON_LEAVE_TODAY_SUCCESS,
} from './onLeaveToday.actions';

export const employeeOnLeaveTodayReducer = createReducer(
  initialEmployeeOnLeaveToday,
  on(FETCH_EMPLOYEE_ON_LEAVE_TODAY, (prevState) => ({
    ...prevState,
    loading: true,
    error: null,
  })),
  on(
    FETCH_EMPLOYEE_ON_LEAVE_TODAY_SUCCESS,
    (prevState, { employeeOnLeaveToday }) => ({
      ...prevState,
      employeeOnLeaveToday,
      loading: false,
    })
  ),
  on(FETCH_EMPLOYEE_ON_LEAVE_TODAY_FAILURE, (prevState, { error }) => ({
    ...prevState,
    loading: false,
    error,
  }))
);
