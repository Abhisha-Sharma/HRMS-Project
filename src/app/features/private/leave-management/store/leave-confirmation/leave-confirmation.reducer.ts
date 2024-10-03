import { createReducer, on } from "@ngrx/store";
import { initialState } from "./leave-confirmation.state";
import { FETCH_LEAVE_REQUEST_lIST, FETCH_LEAVE_REQUEST_lIST_FAIL, FETCH_LEAVE_REQUEST_lIST_SUCCESS } from "./leave-confirmation.actions";

export const LeaveRequestListReducer = createReducer(
    initialState,
    on(FETCH_LEAVE_REQUEST_lIST, (state) => ({
        ...state,
        loading: true,
        error:  null,
    })),
    on(FETCH_LEAVE_REQUEST_lIST_SUCCESS, (state, { leaveRequestList })=> ({
        ...state,
        leaveRequestList: leaveRequestList,
        loading: false,
        error: null
    })),
    on(FETCH_LEAVE_REQUEST_lIST_FAIL, (state, { error}) => ({
        ...state,
        loading: false,
        error: error
    }))
)