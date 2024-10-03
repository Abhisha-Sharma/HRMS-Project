import { createReducer, on } from "@ngrx/store";
import { initialUpdateEmployeeState } from "./update-staff.state";
import { updateEmployee, updateEmployeeFailure, updateEmployeeSuccess } from "./update-staff.action";

export const employeeUpdateReducer = createReducer(
    initialUpdateEmployeeState,
    on(updateEmployee, (state) => ({
        ...state,
        updating: true,
        updateSuccess: null,
        error: null,
    })),
    on(updateEmployeeSuccess, (state, { data }) => ({
        ...state,
        updating: false,
        updateSuccess: data,
        error: null,
    })),
    on(updateEmployeeFailure, (state, { error }) => ({
        ...state,
        updating: false,
        updateSuccess: false,
        error: error,
    }))
);