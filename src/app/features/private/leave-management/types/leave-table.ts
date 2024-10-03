export interface LeaveTableData {
  leaveFrom: string;
  leaveTo: string;
  leaveType: string;
  dayLeave: string;
  reasonForLeave: string;
  leaveRequestStatus: string;
  id?: number;
  employeeId?: number;
  employeeName?: string;
  departmentId?: number;
  department?: string;
  mobileNo?: string;
  totalLeaveDuration?: number;
}

export interface LeaveTableResponse {
  result: number;
  message: string;
  data: Array<LeaveTableData>;
}

export interface LeaveAvailableData {
  totalLeaveTaken: number;
  totalLeaveAvailable: number;
  annualLeaveAvailable: number;
  sickLeaveAvailable: number;
  otherLeaveAvailable: number;
  id?: string;
}
export interface LeaveRequestList {
  id: string;
  reason: string;
  leaveFrom: string;
  leaveTo: string;
  status: string;
  name: string;
  daysLeft: string;
  employeeId: string;
}

export interface LeaveBalanceResponse{
  result: number,
  message: string,
  data: LeaveBalanceData[];
}

export interface  LeaveBalanceData {
  id:number,
  employeeId: number,
  remainingCount: number,
  totalCount: number,
  leaveTypeEnum : string
}

export enum LeaveRequestStatus {
  Accept = 'Accept',
  Reject = 'Reject',
  Pending = 'Pending'
}