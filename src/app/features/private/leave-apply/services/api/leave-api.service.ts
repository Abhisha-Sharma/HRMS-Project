import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LeaveApplyBody } from '../../types/leave-apply';
import { baseUrl } from '@shared/constants/global.constants';
import { apiConstants } from '@shared/constants/api.constants';

@Injectable({
  providedIn: 'root',
})
export class LeaveApplyApiService {

  // private leaveApplyUrl = `http://localhost:5262/apigateway/attendanceLeave/LeaveRequest/AddLeaveRequest`;

  constructor(private http: HttpClient){}

  addLeaveRequest(body: LeaveApplyBody): Observable<{message: string, leaveData: LeaveApplyBody}> {
    return this.http.post<{message: string, leaveData: LeaveApplyBody}>(`${baseUrl}${apiConstants.leave.addLeaveRequest}`, body).pipe(
      map(response => ({
        message: response.message,
        leaveData: response.leaveData
      }))
    );
  }
  fetchEditLeaveData(id: string | number): Observable<LeaveApplyBody> {
    return this.http.get<LeaveApplyBody>(`${baseUrl}/${id}`);
  }
}
