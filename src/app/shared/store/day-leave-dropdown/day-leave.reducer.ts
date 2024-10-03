import { createReducer, on } from "@ngrx/store";
import { initialState } from "./day-leave.state";
import { FETCH_DAY_LEAVE_DROPDOWN, FETCH_DAY_LEAVE_DROPDOWN_FAILURE, FETCH_DAY_LEAVE_DROPDOWN_SUCCESS } from "./day-leave.actions";

export const FetchDayLeaveReducer = createReducer(
    initialState,
    on(FETCH_DAY_LEAVE_DROPDOWN, (state)=> ({
        ...state,
        loading: true,
        error: null
    })),
    on(FETCH_DAY_LEAVE_DROPDOWN_SUCCESS, (state, { dayLeaveDropdown }) => ({
        ...state,
        dayLeaveDropdown : dayLeaveDropdown,
        loading: false,
        error: null
    })),
    on(FETCH_DAY_LEAVE_DROPDOWN_FAILURE, (state, { error }) => ({
        ...state,
        loading: false,
        error: error
    }))
)