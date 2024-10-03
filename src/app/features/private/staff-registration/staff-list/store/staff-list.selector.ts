import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StaffListState } from './staff-list.state';

export const selectStaffListState =
  createFeatureSelector<StaffListState>('staffList');

export const selectStaffList = createSelector(
  selectStaffListState,
  (state: StaffListState) => state.staff
);

export const selectStaffListLoading = createSelector(
  selectStaffListState,
  (state: StaffListState) => state.loading
);

export const selectStaffListError = createSelector(
  selectStaffListState,
  (state: StaffListState) => state.error
);
