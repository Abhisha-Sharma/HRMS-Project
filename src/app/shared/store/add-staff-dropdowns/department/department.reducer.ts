import { createReducer, on } from '@ngrx/store';
import { initialDepartmentState } from './department.state';
import * as DepartmentAction from './department.actions';

export const departmentReducer = createReducer(
  initialDepartmentState,
  on(DepartmentAction.loadDepartments, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(DepartmentAction.loadDepartmentsSucess, (state, { departments }) => ({
    ...state,
    loading: false,
    departments,
    error: null,
  })),
  on(DepartmentAction.loadDepartmentsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
