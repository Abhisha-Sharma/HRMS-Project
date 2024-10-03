import { createReducer, on } from '@ngrx/store';
import {
  FETCH_TODAY_ATTENDANCE_SUMMARY,
  FETCH_TODAY_ATTENDANCE_SUMMARY_SUCCESS,
} from './today-attendance.actions';
import { initialTodayAttendanceSummaryState } from './today-attendance.state';
import { FETCH_AVAILABLE_LEAVE_DATA_FAILURE } from '../../../leave-management/store/leave-available/leave-available.actions';

export const todayAttendanceSummaryReducer = createReducer(
  initialTodayAttendanceSummaryState,
  on(FETCH_TODAY_ATTENDANCE_SUMMARY, (prevState) => ({
    ...prevState,
    loading: true,
    error: null,
  })),
  on(
    FETCH_TODAY_ATTENDANCE_SUMMARY_SUCCESS,
    (prevState, { attendanceData }) => {
      // console.log('Updated State:', {
      //   ...prevState,
      //   attendanceData,
      //   loading: false,
      // });
      return {
        ...prevState,
        attendanceData,
        loading: false,
      };
    }
  ),
  on(FETCH_AVAILABLE_LEAVE_DATA_FAILURE, (prevState, { error }) => ({
    ...prevState,
    loading: false,
    error,
  }))
);
