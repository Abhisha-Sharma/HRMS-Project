import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UpdateEmployeeState } from "./update-staff.state";

export const selectUpdateEmployeeState = createFeatureSelector<UpdateEmployeeState>('updateEmployee');

export const selectIsUpdating = createSelector(
    selectUpdateEmployeeState,
    (state: UpdateEmployeeState) => state.updating
);
export const selectUpdateSuccess = createSelector(
    selectUpdateEmployeeState,
    (state: UpdateEmployeeState) => state.updateSuccess
);
export const selectUpdateError = createSelector(
    selectUpdateEmployeeState,
    (state: UpdateEmployeeState) => state.error
);