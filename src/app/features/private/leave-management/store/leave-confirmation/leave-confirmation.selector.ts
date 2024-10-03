import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LeaveRequestListState } from './leave-confirmation.state';

export const fetchLeaveRequestList =
  createFeatureSelector<LeaveRequestListState>('leaveRequestList');

export const selectLeaveRequestList = createSelector(
  fetchLeaveRequestList,
  (state) => state.leaveRequestList
);

export const selectLeaveRequestListLoading = createSelector(
  fetchLeaveRequestList,
  (state) => state.loading
);

export const selectLeaveRequestListError = createSelector(
  fetchLeaveRequestList,
  (state) => state.error
);
