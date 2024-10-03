import { createAction, props } from "@ngrx/store";
import { RegisterStaffPayload } from "../../model/add-staff";

export const updateEmployee = createAction(
    '[Employee] Update Employee',
    props<{ employeeId: number; updatedData: RegisterStaffPayload }>()
);

export const updateEmployeeSuccess = createAction(
    '[Employee] Update Employee Success',
    props<{ data: boolean }>()
);

export const updateEmployeeFailure = createAction(
    '[Employee] Update Employee Failure',
    props<{ error: string }>()
);