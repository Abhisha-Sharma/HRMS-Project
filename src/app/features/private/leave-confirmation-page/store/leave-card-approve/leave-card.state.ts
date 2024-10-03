import { LeaveAcceptRejectResponse } from "../../types/types";

export interface LeaveAcceptRejectState{
    loading: boolean;
    error: any;
    response: LeaveAcceptRejectResponse|null
}
export const initialState:  LeaveAcceptRejectState = {
    loading: false,
    error: null,
    response: null,
}
