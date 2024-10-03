export interface Dashboard {
  user: number;
  totalCheckedIn: number;
  totalOfficeCheckedIn: number;
  totalWorkingFromHome: number;
  leaveRequests: LeaveRequests;
  staffsOnLeaveToday: LeaveRequests;
  staffsOnLeaveTomorrow: LeaveRequests;
  id?: string;
}

export interface LeaveRequests {
  id: number;
  employeeId: number;
  employeeName: string;
  leaveType: string;
  departmentId: number;
  department: string;
  phoneNumber: string;
  leaveFrom: string;
  leaveTo: string;
  dayLeave: string;
  reasonForLeave: string;
  leaveRequestStatus: string;
  totalLeaveDuration: number;
}

export interface LeaveStatus {
  id: number;
  employeeId: number;
  employeeName: string;
  leaveFrom: string;
  leaveTo: string;
  leaveType: number;
  dayLeave: number;
  reasonForLeave: string;
  leaveRequestStatus: number;
}
