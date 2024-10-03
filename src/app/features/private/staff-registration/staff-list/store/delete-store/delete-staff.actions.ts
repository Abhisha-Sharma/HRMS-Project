import { createAction, props } from '@ngrx/store';

export const deleteEmployee = createAction(
    '[Employee] Delete Employee',
    props<{ id: number }>()
);

export const deleteEmployeeSuccess = createAction(
    '[Employee] Delete Employee Success',
);

export const deleteEmployeeFailure = createAction(
    '[Employee] Delete Employee Failure',
    props<{ error: string }>()
);
