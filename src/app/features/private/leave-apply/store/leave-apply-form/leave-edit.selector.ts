import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IEditLeaveEdit } from "./leave-edit.state";

export const selectLeaveEditState = createFeatureSelector<IEditLeaveEdit>('leaveEdit');

export const selectLeaveEditData = createSelector(
    selectLeaveEditState,
    (state: IEditLeaveEdit) => state.leaveEditData
)
export const selectLeaveLoading = createSelector(
    selectLeaveEditState,
    (state: IEditLeaveEdit) => state.loading
)
export const selectLeaveError = createSelector(
    selectLeaveEditState,
    (state: IEditLeaveEdit) => state.error
)
