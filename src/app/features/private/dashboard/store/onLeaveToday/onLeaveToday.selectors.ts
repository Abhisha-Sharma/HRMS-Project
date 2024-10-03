import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeOnLeaveToday } from './onLeaveToday.state';

export const selectEmployeeOnLeaveTodayStore =
  createFeatureSelector<EmployeeOnLeaveToday>('employeeOnLeaveToday');

export const selectEmployeeOnLeaveTodayData = createSelector(
  selectEmployeeOnLeaveTodayStore,
  (state: EmployeeOnLeaveToday) => state.employeeOnLeaveToday
);
export const selectEmployeeOnLeaveTodayDataLoading = createSelector(
  selectEmployeeOnLeaveTodayStore,
  (state: EmployeeOnLeaveToday) => state.loading
);
export const selectEmployeeOnLeaveTodayDataError = createSelector(
  selectEmployeeOnLeaveTodayStore,
  (state: EmployeeOnLeaveToday) => state.error
);
