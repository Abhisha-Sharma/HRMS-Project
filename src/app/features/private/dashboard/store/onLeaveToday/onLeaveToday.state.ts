import { LeaveStatus } from '../../types/leave-summary.interface';

export interface EmployeeOnLeaveToday {
  employeeOnLeaveToday: LeaveStatus[];
  loading: boolean;
  error: string | null;
}

export const initialEmployeeOnLeaveToday: EmployeeOnLeaveToday = {
  employeeOnLeaveToday: [],
  loading: false,
  error: null,
};
