import { Observable } from 'rxjs';
import { apiConstants } from '@shared/constants/api.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseType } from '@shared/models/response.model';
import { LeaveRequests } from '../../types/leave-summary.interface';
baseUrl;
import { baseUrl } from '@shared/constants/global.constants';

@Injectable({
  providedIn: 'root',
})
export class LeaveSummaryService {
  constructor(private http: HttpClient) {}

  getAllUsersPendingLeaveRequests(): Observable<ResponseType<LeaveRequests[]>> {
    return this.http.get<ResponseType<LeaveRequests[]>>(
      baseUrl + apiConstants.attendance.getEmployeePendingLeaveRequests
    );
  }
}
