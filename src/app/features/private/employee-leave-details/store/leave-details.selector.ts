import { createSelector, createFeatureSelector } from '@ngrx/store';
import { LeaveState } from './leave-details.reducer';

export const selectLeaveState = createFeatureSelector<LeaveState>('leaveDetailsList');

export const selectLeaveDetails = createSelector(
  selectLeaveState,
  (state: LeaveState) => state.leaveDetails
);

export const selectLeaveLoading = createSelector(
  selectLeaveState,
  (state: LeaveState) => state.loading
);

export const selectLeaveError = createSelector(
  selectLeaveState,
  (state: LeaveState) => state.error
);
