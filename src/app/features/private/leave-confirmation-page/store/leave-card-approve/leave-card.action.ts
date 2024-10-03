import { createAction, props } from "@ngrx/store";
import { LeaveAcceptRejectResponse } from "../../types/types";

export const LEAVE_ACCEPT_REJECT = createAction(
    '[Leave] Accept Reject ',
    props<{ id:string|number; option:string|number}>()
)
export const LEAVE_ACCEPT_REJECT_SUCCESS = createAction(
    '[Leave] Accept Reject Success',
    props<{ response: LeaveAcceptRejectResponse}>()
)
export const LEAVE_ACCEPT_REJECT_FAILURE = createAction(
    '[Leave] Accept Reject Failure',
    props<{ error: any}>()
)