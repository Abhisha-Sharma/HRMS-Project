import { LeaveBalanceData } from "../../types/leave-table";

export interface LeaveAvailableState {
    leaveBalanceData : LeaveBalanceData[];
    loading : boolean;
    error : string|null;
}

export const initialState : LeaveAvailableState  = {
    leaveBalanceData : [],
    loading: false,
    error: null,
}