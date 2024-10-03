import { LeaveApplyBody } from '../../types/leave-apply';

export interface IEditLeaveEdit {
  leaveEditData: LeaveApplyBody | null;
  loading: boolean;
  error: string | null;
}
export const initialState: IEditLeaveEdit = {
  leaveEditData: null,
  loading: false,
  error: null,
};
