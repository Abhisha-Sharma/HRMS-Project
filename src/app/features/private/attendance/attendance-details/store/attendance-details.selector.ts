import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AttendanceRequestPayload } from './attendance-details.state';

export const selectAttendanceState =
  createFeatureSelector<AttendanceRequestPayload>('attendance');

export const selectAttendanceRecords = createSelector(
  selectAttendanceState,
  (state: AttendanceRequestPayload) => state.record
);

export const selectAttendanceLoading = createSelector(
  selectAttendanceState,
  (state: AttendanceRequestPayload) => state.loading
);

export const selectAttendanceError = createSelector(
  selectAttendanceState,
  (state: AttendanceRequestPayload) => state.error
);
