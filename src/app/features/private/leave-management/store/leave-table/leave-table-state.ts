import { LeaveTableData } from "../../types/leave-table";

export interface LeaveTableState{
    leaveDataTable : LeaveTableData[];
    loading: boolean;
    error: string|null;
}

export const initialState: LeaveTableState={
    leaveDataTable: [],
    loading: false,
    error: null,
}