import { AttendanceData, EmployeeAttendanceRecord } from "../../model/attendance-details.interface";

export interface AttendanceRequestPayload {
  record: AttendanceData | undefined;
  loading: boolean;
  error: string | null;
}

export const initialAttendanceState: AttendanceRequestPayload = {
  record: undefined,
  loading: false,
  error: null,
};
