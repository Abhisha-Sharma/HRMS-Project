import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DepartmentState } from './department.state';

export const selectDepartmentState =
  createFeatureSelector<DepartmentState>('department');
export const selectAllDepartments = createSelector(
  selectDepartmentState,
  (state: DepartmentState) => state.departments
);
export const selectDepartmentsLoading = createSelector(
  selectDepartmentState,
  (state: DepartmentState) => state.loading
);
export const selectDepartmentError = createSelector(
  selectDepartmentState,
  (state: DepartmentState) => state.error
);
