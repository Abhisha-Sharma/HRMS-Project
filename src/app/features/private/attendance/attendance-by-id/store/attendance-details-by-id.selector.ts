import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AttendanceDetailsById } from './attendance-details-by-id.state';

export const selectAttendanceState =
  createFeatureSelector<AttendanceDetailsById>('attendanceById');

export const selectAttendanceByIdRecords = createSelector(
  selectAttendanceState,
  (state: AttendanceDetailsById) => state.record
);

export const selectAttendanceByIdLoading = createSelector(
  selectAttendanceState,
  (state: AttendanceDetailsById) => state.loading
);

export const selectAttendanceByIdError = createSelector(
  selectAttendanceState,
  (state: AttendanceDetailsById) => state.error
);

// calander view
export const selectCalendarViewData = createSelector(
  selectAttendanceState,
  (state: AttendanceDetailsById) => state.calendarData
);
