import { LeaveRequests } from '../../types/leave-summary.interface';

export interface AllUsersPendingLeaveRequestState {
  pendingLeaveRequestData: LeaveRequests[];
  loading: boolean;
  error: string | null;
}

export const initialAllUsersPendingLeaveRequestState: AllUsersPendingLeaveRequestState =
  {
    pendingLeaveRequestData: [],
    loading: false,
    error: null,
  };
