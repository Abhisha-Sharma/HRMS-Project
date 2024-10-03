import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DeleteEmployeeState } from "./delete-staff.state";

export const selectDeleteEmployeeState = createFeatureSelector<DeleteEmployeeState>('deleteStaff');
export const selectDeleteEmployeeLoading = createSelector(
    selectDeleteEmployeeState,
    (state: DeleteEmployeeState) => state.loading
);
export const selectDeleteEmployeeFailure = createSelector(
    selectDeleteEmployeeState,
    (state: DeleteEmployeeState) => state.error

);

