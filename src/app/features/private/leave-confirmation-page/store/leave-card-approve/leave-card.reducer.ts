import { createReducer, on } from "@ngrx/store";
import { initialState } from "./leave-card.state";
import { LEAVE_ACCEPT_REJECT, LEAVE_ACCEPT_REJECT_FAILURE, LEAVE_ACCEPT_REJECT_SUCCESS } from "./leave-card.action";

export const leaveAcceptRejectReducer = createReducer(
    initialState,
    on(LEAVE_ACCEPT_REJECT, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(LEAVE_ACCEPT_REJECT_SUCCESS,(state, {response}) => ({
        ...state,
        loading: false,
        response,
        error: null
    })),
    on(LEAVE_ACCEPT_REJECT_FAILURE, (state, {error}) => ({
        ...state,
        loading: false,
        error: error
    }))

)