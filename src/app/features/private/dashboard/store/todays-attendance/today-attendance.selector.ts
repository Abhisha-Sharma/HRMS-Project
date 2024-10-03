import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodayAttendanceSummaryState } from './today-attendance.state';

export const selectAttendanceSummary =
  createFeatureSelector<TodayAttendanceSummaryState>('todayAttendanceSummary');

export const selectAttendanceSummaryData = createSelector(
  selectAttendanceSummary,
  (state: TodayAttendanceSummaryState) => state.attendanceData
);

export const selectAttendanceSummaryLoading = createSelector(
  selectAttendanceSummary,
  (state: TodayAttendanceSummaryState) => state.loading
);

export const selectAttendanceSummaryError = createSelector(
  selectAttendanceSummary,
  (state: TodayAttendanceSummaryState) => state.error
);
