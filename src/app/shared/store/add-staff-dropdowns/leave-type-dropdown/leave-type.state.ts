export interface LeaveTypeDropDownState {
    leaveTypeDropdown : LeaveTypeDropdown[];
    loading: boolean;
    error:  string|null;
}
export interface LeaveTypeDropdown{
    key: number;
    value : string;
}
export const initialState : LeaveTypeDropDownState= {
    leaveTypeDropdown : [],
    loading: false,
    error: null
}
export interface LeaveTypeDropDownResponse{
    result: number;
    message : string;
    data : LeaveTypeDropdown[];
}