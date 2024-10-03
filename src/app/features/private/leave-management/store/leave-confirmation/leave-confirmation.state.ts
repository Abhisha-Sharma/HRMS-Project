import { LeaveRequestList } from "../../types/leave-table";

export interface LeaveRequestListState {
    leaveRequestList : LeaveRequestList[],
    loading: boolean,
    error: string|null
}

export const initialState: LeaveRequestListState = {
    leaveRequestList : [],
    loading: false,
    error: null
}