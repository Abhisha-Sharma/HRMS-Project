export interface ICalenderResponse {
  result: number;
  message: string;
  data: ICalenderData;
}
export interface ICalenderData {
  count?: number;
  take?: number;
  skip?: number;
  data: ICalenderResponseData[];
}
export interface ICalenderResponseData {
  id: number;
  employeeId: number;
  chcekinReason: string;
  checkIn: string;
  checkOut: string;
  checkOutReason: string;
  workingHour: number;
  workLocation: number;
}
export interface ICalenderPayload {
  startingCheckInDate: string;
  endCheckInDate: string;
  employeeStartingDate?: string;
  skip: number;
  take: number;
  sort: {
    key?: string;
    sortBy: string;
  };
}
