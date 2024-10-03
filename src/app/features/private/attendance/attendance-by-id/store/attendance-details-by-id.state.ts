import {
  CalenderViewData,
  EmployeeByIdData,
} from '../../model/attendance-details.interface';

export interface AttendanceDetailsById {
  record: EmployeeByIdData | undefined;
  calendarData: CalenderViewData[] | null;
  loading: boolean;
  error: string | null;
}

export const initialAttendanceStateById: AttendanceDetailsById = {
  record: undefined,
  calendarData: null,
  loading: false,
  error: null,
};
