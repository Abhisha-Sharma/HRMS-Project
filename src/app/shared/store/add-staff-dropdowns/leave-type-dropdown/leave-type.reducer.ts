import { createReducer, on } from "@ngrx/store";
import { initialState } from "./leave-type.state";
import { FETCH_LEAVE_TYPE_DROPDOWN, FETCH_LEAVE_TYPE_DROPDOWN_FAILURE, FETCH_LEAVE_TYPE_DROPDOWN_SUCCESS } from "./leave-type.action";

export const FetchLeaveTypeReducer = createReducer(
    initialState,
    on(FETCH_LEAVE_TYPE_DROPDOWN, (state)=> ({
        ...state,
        loading: true,
        error: null
    })),
    on(FETCH_LEAVE_TYPE_DROPDOWN_SUCCESS, (state, { leaveTypeDropdown }) => ({
        ...state,
        leaveTypeDropdown : leaveTypeDropdown,
        loading: false,
        error: null
    })),
    on(FETCH_LEAVE_TYPE_DROPDOWN_FAILURE, (state, { error }) => ({
        ...state,
        loading: false,
        error: error
    }))
)