import { Injectable } from '@angular/core';
import { ResponseType } from '@shared/models/response.model';
import { Observable } from 'rxjs';
import { LeaveStatus } from '../../types/leave-summary.interface';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '@shared/constants/global.constants';
import { apiConstants } from '@shared/constants/api.constants';
import { formatDate } from '@shared/utils/date-utils';

@Injectable({
  providedIn: 'root',
})
export class OnLeaveTodayService {
  today = formatDate(new Date());

  getStaffsOnLeaveToday(): Observable<ResponseType<LeaveStatus[]>> {
    return this.http.get<ResponseType<LeaveStatus[]>>(
      `${baseUrl}${apiConstants.attendance.getEmployeeLeaveRequestAccordingToDateAndStatus}?date=${this.today}&id=2`
    );
  }
  constructor(private http: HttpClient) {}
}
