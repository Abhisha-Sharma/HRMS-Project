import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AllUsersPendingLeaveRequestState } from './leave-summary.state';

export const selectAllUsersPendingLeaveRequestStore =
  createFeatureSelector<AllUsersPendingLeaveRequestState>(
    'allUsersPendingLeaveRequest'
  );

export const selectAllUsersPendingLeaveRequestData = createSelector(
  selectAllUsersPendingLeaveRequestStore,
  (state: AllUsersPendingLeaveRequestState) => state.pendingLeaveRequestData
);
export const selectAllUsersPendingLeaveRequestDataLoading = createSelector(
  selectAllUsersPendingLeaveRequestStore,
  (state: AllUsersPendingLeaveRequestState) => state.loading
);
export const selectAllUsersPendingLeaveRequestDataError = createSelector(
  selectAllUsersPendingLeaveRequestStore,
  (state: AllUsersPendingLeaveRequestState) => state.error
);
