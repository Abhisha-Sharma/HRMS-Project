import { TodayAttendanceSummary } from '../../types/todays-attendance.interface';

export interface TodayAttendanceSummaryState {
  attendanceData: TodayAttendanceSummary | null;
  loading: boolean;
  error: string | null;
}

export const initialTodayAttendanceSummaryState: TodayAttendanceSummaryState = {
  attendanceData: null,
  loading: false,
  error: null,
};
