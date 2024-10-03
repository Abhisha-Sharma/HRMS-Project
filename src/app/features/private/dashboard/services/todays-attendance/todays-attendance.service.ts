import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { type ResponseType } from '../../../../../shared/models/response.model';
import { type TodayAttendanceSummary } from '../../types/todays-attendance.interface';
import { apiConstants } from '../../../../../shared/constants/api.constants';
import { baseUrl } from '../../../../../shared/constants/global.constants';

@Injectable({
  providedIn: 'root',
})
export class TodaysAttendanceService {
  constructor(private http: HttpClient) {}

  getTodaysAttendanceSummary(): Observable<
    ResponseType<TodayAttendanceSummary>
  > {
    return this.http.get<ResponseType<TodayAttendanceSummary>>(
      baseUrl + apiConstants.attendance.getTodaysAttendanceSummary
    );
  }

  //Count of Total Leave Today
  fetchTotalLeaveToday(): Observable<number> {
    return this.http.get<number>(
      baseUrl + apiConstants.attendance.getTotalLeaveToday
    );
  }
}
