export interface DayLeaveDropDownState {
    dayLeaveDropdown : DayLeaveDropdown[];
    loading: boolean;
    error:  string|null;
}
export interface DayLeaveDropdown{
    key: number;
    value : string;
}
export const initialState : DayLeaveDropDownState= {
    dayLeaveDropdown : [],
    loading: false,
    error: null
}
export interface DayLeaveDropDownResponse{
    result: number;
    message : string;
    data : DayLeaveDropdown[];
}