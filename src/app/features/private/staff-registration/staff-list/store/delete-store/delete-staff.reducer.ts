import { createReducer, on } from '@ngrx/store';
import { initialDeleteState } from './delete-staff.state';
import { deleteEmployee, deleteEmployeeFailure, deleteEmployeeSuccess } from './delete-staff.actions';



export const deleteEmployeeReducer = createReducer(
    initialDeleteState,
    on(deleteEmployee, state => ({
        ...state,
        loading: true
    })),
    on(deleteEmployeeSuccess, (state) => ({
        ...state,
        loading: false,
    })),
    on(deleteEmployeeFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    }))
);
