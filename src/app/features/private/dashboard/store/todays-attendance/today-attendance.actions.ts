import { TodayAttendanceSummary } from './../../types/todays-attendance.interface';
import { createAction, props } from '@ngrx/store';

export const FETCH_TODAY_ATTENDANCE_SUMMARY = createAction(
  '[Today Attendance Summary] Today Attendance Summary'
);

export const FETCH_TODAY_ATTENDANCE_SUMMARY_SUCCESS = createAction(
  '[Today Attendance Summary] Today Attendance Summary Success',
  props<{ attendanceData: TodayAttendanceSummary }>()
);

export const FETCH_TODAY_ATTENDANCE_SUMMARY_FAILURE = createAction(
  '[Today Attendance Summary] Today Attendance Summary Failure',
  props<{ error: string }>()
);
