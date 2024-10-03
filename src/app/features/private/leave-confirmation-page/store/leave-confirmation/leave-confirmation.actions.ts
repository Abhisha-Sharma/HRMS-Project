import { createAction, props } from "@ngrx/store";
import { LeaveRequestList } from "../../types/types";

export const FETCH_LEAVE_REQUEST_lIST = createAction(
    '[Leave Request] Fetch Leave Request List',
)
export const FETCH_LEAVE_REQUEST_lIST_SUCCESS = createAction(
    '[Leave Request] Fetch Leave Request List  Success',
    props<{  leaveRequestList: LeaveRequestList[] }>()
)
export const FETCH_LEAVE_REQUEST_lIST_FAIL = createAction(
    '[Leave Request] Fetch Leave Request List Fail',
    props<{ error: string|null}>()
)