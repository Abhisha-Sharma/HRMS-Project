import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LeaveTableState } from "./leave-table-state";

export const selectLeaveTableData = createFeatureSelector<LeaveTableState>('leaveTableData');

export const selectLeaveData = createSelector(
    selectLeaveTableData,
    (state) => state.leaveDataTable
)

export const selectLeaveDataLoading = createSelector(
    selectLeaveTableData,
    (state) => state.loading

)
export const selectLeaveDataError = createSelector(
    selectLeaveTableData,
    (state) => state.error
)
