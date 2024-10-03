import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LeaveAcceptRejectState } from './leave-card.state';

export const selectLeaveState = createFeatureSelector<LeaveAcceptRejectState>('leaveAcceptRejectState');

// Step 2: Create individual selectors for the state properties
export const selectLeaveResponse = createSelector(
  selectLeaveState,
  (state: LeaveAcceptRejectState) => state.response
);

export const selectLeaveLoading = createSelector(
  selectLeaveState,
  (state: LeaveAcceptRejectState) => state.loading
);

export const selectLeaveError = createSelector(
  selectLeaveState,
  (state: LeaveAcceptRejectState) => state.error
);
