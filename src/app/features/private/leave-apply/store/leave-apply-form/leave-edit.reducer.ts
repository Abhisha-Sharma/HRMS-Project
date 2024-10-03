import { createReducer, on } from "@ngrx/store";
import { initialState } from "./leave-edit.state";
import { GET_EDIT_LEAVE_DATA, GET_EDIT_LEAVE_DATA_FAILURE, GET_EDIT_LEAVE_DATA_SUCCESS } from "./leave-edit.action";

export const LeaveEditReducer = createReducer(
    initialState,
    on(GET_EDIT_LEAVE_DATA, (state)=> ({
        ...state,
        loading: true,
        error: null
    })),
    on(GET_EDIT_LEAVE_DATA_SUCCESS, (state, { editLeaveData }) => ({
        ...state,
        editLeaveData : editLeaveData,
        loading: false,
        error: null
    })),
    on(GET_EDIT_LEAVE_DATA_FAILURE, (state, { error}) => ({
        ...state,
        loading: false,
        error: error
    }))
)