// export interface CheckedInStatusResponse {
//   data: boolean;
// }

export interface CheckInMessage {
  checkInReason: string;
  workLocation: number;
}

export interface CheckInOutMessageResponse {
  result: number;
  message: string;
  data: string;
}
