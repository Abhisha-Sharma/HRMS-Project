import { createReducer, on } from '@ngrx/store';

import { initialAttendanceStateById } from './attendance-details-by-id.state';
import {
  loadAttendanceListById,
  loadAttendanceListByIdFailure,
  loadAttendanceListByIdSuccess,
} from './attendance-details-by-id.actions';

export const attendanceReducerById = createReducer(
  initialAttendanceStateById,

  on(loadAttendanceListById, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(loadAttendanceListByIdSuccess, (state, { response, calendarData }) => ({
    ...state,
    record: response,
    calendarData: calendarData,
    loading: false,
    error: null,
  })),

  on(loadAttendanceListByIdFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
