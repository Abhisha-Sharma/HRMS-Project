import { createAction, props } from '@ngrx/store';
import { LeaveApplyBody } from '../../types/leave-apply';

export const leaveApply = '[Leave Apply] Submit Leave Form';
export const leaveApplySuccess = '[Leave Apply]  Submit Leave Form Success';
export const leaveApplyFail = '[Leave Apply] Submit Leave Form Fail';

export const submitLeaveForm = createAction(
  leaveApply,
  props<{ leaveData: LeaveApplyBody }>()
);
export const submitLeaveFormSuccess = createAction(
  leaveApplySuccess,
  props<{ leaveData: LeaveApplyBody }>()
);
export const submitLeaveFormFail = createAction(
  leaveApplyFail,
  props<{ error: string|null }>()
);
