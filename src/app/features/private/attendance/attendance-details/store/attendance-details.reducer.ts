import { createReducer, on } from '@ngrx/store';
import { initialAttendanceState } from './attendance-details.state';
import {
  loadAttendanceList,
  loadAttendanceListSuccess,
  loadAttendanceListFailure,
} from './attendance-details.actions';

export const attendanceReducer = createReducer(
  initialAttendanceState,

  on(loadAttendanceList, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(loadAttendanceListSuccess, (state, { response }) => ({
    ...state,
    record: response,
    loading: false,
    error: null,
  })),

  on(loadAttendanceListFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
