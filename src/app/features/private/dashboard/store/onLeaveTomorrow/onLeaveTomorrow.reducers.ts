import { createReducer, on } from '@ngrx/store';
import {
  FETCH_EMPLOYEE_ON_LEAVE_TOMORROW,
  FETCH_EMPLOYEE_ON_LEAVE_TOMORROW_FAILURE,
  FETCH_EMPLOYEE_ON_LEAVE_TOMORROW_SUCCESS,
} from './onLeaveTomorrow.actions';
import { initialEmployeeOnLeaveTomorrow } from './onLeaveTomorrow.state';

export const employeeOnLeaveTomorrowReducer = createReducer(
  initialEmployeeOnLeaveTomorrow,
  on(FETCH_EMPLOYEE_ON_LEAVE_TOMORROW, (prevState) => ({
    ...prevState,
    loading: true,
    error: null,
  })),
  on(
    FETCH_EMPLOYEE_ON_LEAVE_TOMORROW_SUCCESS,
    (prevState, { employeeOnLeaveTomorrow }) => ({
      ...prevState,
      employeeOnLeaveTomorrow,
      loading: false,
    })
  ),
  on(FETCH_EMPLOYEE_ON_LEAVE_TOMORROW_FAILURE, (prevState, { error }) => ({
    ...prevState,
    loading: false,
    error,
  }))
);
