import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LeaveState } from "./leave.reducer";

export const selectLeaveState = createFeatureSelector<LeaveState>('leaveApply');

export const selectLeaveData = createSelector(
    selectLeaveState,
    (state: LeaveState) => state.leaveData
)

export const selectLoading = createSelector(
    selectLeaveState,
    (state: LeaveState) => state.loading
)

export const selectError = createSelector(
    selectLeaveState,
    (state: LeaveState) => state.error
)