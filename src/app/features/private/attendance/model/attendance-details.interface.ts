export interface AttendanceRequestPayload extends FormValue {
  skip?: number;
  take?: number;
  sort?: {
    key?: string;
    sortBy?: string;
  };
}

export interface FormValue {
  departmentId?: number;
  employeeId?: number;
  startDate?: string;
  endDate?: string;
  workLocation?: number;
}

export interface EmployeeAttendanceRecord {
  id: number;
  employeeId: number;
  departmentId: number;
  checkIn: string;
  checkInReason: string;
  checkOut: string;
  checkOutReason: string;
  workingHour: number;
  workLocation: number;
  employeeName: string;
  departmentName: string;
}

export interface EmployeeAttendanceRecordForTable extends EmployeeAttendanceRecord {
  actions: unknown
  SN: string;
}

export interface AttendanceData {
  count: number;
  take: number;
  skip: number;
  data: EmployeeAttendanceRecord[];
}


export interface EmployeeAttendanceRecordById {
  id: number;
  employeeId: number;
  checkIn: string | null;
  checkInReason: string | null;
  checkOut: string | null;
  checkOutReason: string | null;
  workingHour: number;
  workLocation: number;
}
export interface EmployeeAttendanceRecordForTableByID extends EmployeeAttendanceRecordById {
  SN: string;
}
export interface EmployeeByIdData {
  count: number;
  take: number;
  skip: number;
  data: EmployeeAttendanceRecordById[];
}
export interface CalenderViewData {
  date: string;
  checkin: string;
  checkout: string;
}
