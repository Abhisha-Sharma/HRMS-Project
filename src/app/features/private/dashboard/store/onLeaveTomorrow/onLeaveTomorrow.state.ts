import { LeaveStatus } from '../../types/leave-summary.interface';

export interface EmployeeOnLeaveTomorrow {
  employeeOnLeaveTomorrow: LeaveStatus[];
  loading: boolean;
  error: string | null;
}

export const initialEmployeeOnLeaveTomorrow: EmployeeOnLeaveTomorrow = {
  employeeOnLeaveTomorrow: [],
  loading: false,
  error: null,
};
