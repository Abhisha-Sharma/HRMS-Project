export interface ILeaveDetailsResponse {
    result: number;
    message: string;
    data: ILeaveDetailsData[]
}

export interface ILeaveDetailsData {
    id: number;
    employeeId: number;
    remainingCount: number;
    totalCount:0;
    leaveTypeEnum: string;
}