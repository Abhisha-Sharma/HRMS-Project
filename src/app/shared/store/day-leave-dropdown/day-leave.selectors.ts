import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DayLeaveDropDownState } from "./day-leave.state";

export const DayLeaveDropdownSelector = createFeatureSelector<DayLeaveDropDownState>('dayLeaveDropdown');

export const DayLeaveDropDownData = createSelector(
    DayLeaveDropdownSelector,
    (state) => state.dayLeaveDropdown
)
export const DayLeaveDropDownLoading = createSelector(
    DayLeaveDropdownSelector,
    (state) => state.loading
)
export const DayLeaveDropDownError = createSelector(
    DayLeaveDropdownSelector,
    (state) => state.error
)