import { formatDate } from '@shared/utils/date-utils';
import {
  CalenderViewData,
  EmployeeAttendanceRecord,
  EmployeeAttendanceRecordById,
} from '../../model/attendance-details.interface';

// export const calendarViewUtils = (
//   responseData: EmployeeAttendanceRecord[]
// ): CalenderViewData[] => {
//   const calenderViewData: CalenderViewData[] = [];
//   calenderViewData.forEach((item) => {
//     responseData.forEach((data) => (
//         item.checkin = data.checkIn.split(' ')[1],
//     item.checkout=data.checkOut.split(' ')[1],
//     item.date = data.checkIn.split(' ')[0],
//   )
// );
//   });
//   return calenderViewData;
// };
export const calendarViewUtils = (
  responseData: EmployeeAttendanceRecordById[]
): CalenderViewData[] => {
  return responseData.map((data) => {
    const formattedDate = new Date(data.checkIn ?? '');

    const formattedCheckoutDate = new Date(data.checkOut ?? '');

    const date = formattedDate.toISOString().split('T')[0];

    const checkInTime = formattedDate.toTimeString().split(' ')[0];

    const checkOutTime = formattedCheckoutDate.toTimeString().split(' ')[0];

    return {
      date: date,
      checkin: checkInTime,
      checkout: checkOutTime,
    };
  });
};
