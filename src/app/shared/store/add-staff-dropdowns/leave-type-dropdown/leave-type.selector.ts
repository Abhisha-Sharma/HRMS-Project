import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LeaveTypeDropDownState } from "./leave-type.state";

export const LeaveTypeDropDownSelector = createFeatureSelector<LeaveTypeDropDownState>('leaveTypeDropDown')

export const LeaveTypeDropDownData = createSelector(
    LeaveTypeDropDownSelector,
    (state) => state.leaveTypeDropdown
)
export const leaveTypeDropDownLoading = createSelector(
    LeaveTypeDropDownSelector,
    (state) => state.loading
)
export const leaveTypeDropDownError = createSelector(
    LeaveTypeDropDownSelector,
    (state) => state.error
)