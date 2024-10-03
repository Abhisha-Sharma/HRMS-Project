import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl, loggedInUser } from '@shared/constants/global.constants';
import { map, Observable } from 'rxjs';
import {
  LeaveBalanceData,
  LeaveBalanceResponse,
} from '../../types/leave-table';
import { apiConstants } from '@shared/constants/api.constants';

@Injectable({
  providedIn: 'root',
})
export class LeaveAvailableService {
  // private apiUrl =
  //   'http://localhost:5262/apigateway/attendanceLeave/LeaveBalance/GetLeaveBalanceofEmp?empId=';

  constructor(private http: HttpClient) {}

  parameter? : string;

  getLeaveAvailableData(employeeId: number): Observable<{
    message: string;
    leaveBalanceData: LeaveBalanceData[];
  }> {
    return this.http
      .get<LeaveBalanceResponse>(`${baseUrl}${apiConstants.leave.getLeaveBalanceofEmp}?empId=${employeeId}`)
      .pipe(
        map((response) => ({
          message: response.message,
          leaveBalanceData: response.data,
        }))
      );
  }
}