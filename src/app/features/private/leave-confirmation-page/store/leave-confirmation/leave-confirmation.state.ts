import { LeaveRequestList } from "../../types/types"


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