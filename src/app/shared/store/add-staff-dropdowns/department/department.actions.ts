import { createAction, props } from '@ngrx/store';
import { DepartmentData } from '../../../models/department.interface';
export const loadDepartments = createAction('[Department] Load Departments');
export const loadDepartmentsSucess = createAction(
  '[Department]Load Departments Success',
  props<{ departments: DepartmentData[] }>()
);
export const loadDepartmentsFailure = createAction(
  '[Department] Load Departments Failure',
  props<{ error: string }>()
);
