import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveStatus } from '../../types/leave-summary.interface';
import { ResponseType } from '@shared/models/response.model';
import { baseUrl } from '@shared/constants/global.constants';
import { apiConstants } from '@shared/constants/api.constants';
import { DAY_DATA } from '@shared/utils/date-utils';

@Injectable({
  providedIn: 'root',
})
export class OnLeaveTomorrowService {
  getStaffsOnLeaveTomorrow(): Observable<ResponseType<LeaveStatus[]>> {
    return this.http.get<ResponseType<LeaveStatus[]>>(
      `${baseUrl}${apiConstants.attendance.getEmployeeLeaveRequestAccordingToDateAndStatus}?date=${DAY_DATA.getTomorrow}&id=2`
    );
  }
  constructor(private http: HttpClient) {}
}
