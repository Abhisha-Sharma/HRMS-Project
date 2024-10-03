import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeOnLeaveTomorrow } from './onLeaveTomorrow.state';

export const selectEmployeeOnLeaveTomorrowStore =
  createFeatureSelector<EmployeeOnLeaveTomorrow>('employeeOnLeaveTomorrow');

export const selectEmployeeOnLeaveTomorrowData = createSelector(
  selectEmployeeOnLeaveTomorrowStore,
  (state: EmployeeOnLeaveTomorrow) => state.employeeOnLeaveTomorrow
);

export const selectEmployeeOnLeaveTomorrowDataLoading = createSelector(
  selectEmployeeOnLeaveTomorrowStore,
  (state: EmployeeOnLeaveTomorrow) => state.loading
);

export const selectEmployeeOnLeaveTomorrowDataError = createSelector(
  selectEmployeeOnLeaveTomorrowStore,
  (state: EmployeeOnLeaveTomorrow) => state.error
);
