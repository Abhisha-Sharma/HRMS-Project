export interface LeaveRequestList {
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

export interface LeaveRequestListResponse {
    result:number;
    message: string;
    data: LeaveRequestListData;
}

export interface LeaveRequestListData{
    skip: number;
    take: number;
    count: number;
    employeeLeaveRequestResponse:  LeaveRequestList[];
}
export interface ImageResponse{
  result: number;
  message: string;
  data: ImageData;
}
export interface ImageData{
  employeeId: number;
  imageName: string;
  imageDataBase64: string;
}
export interface LeaveAcceptRejectResponse{
  message: string,
  result: number,
  data : boolean
}
