import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConstants } from '@shared/constants/api.constants';
import { baseUrl } from '@shared/constants/global.constants';
import { ResponseType } from '@shared/models/response.model';
import { Observable } from 'rxjs';
import { AttendanceData, AttendanceRequestPayload, EmployeeByIdData } from '../../model/attendance-details.interface';

@Injectable({
  providedIn: 'root',
})
export class AttendanceDetailsService {
  private apiUrl = `${baseUrl}${apiConstants.attendance.getAttandanceList}`;
  private attendanceByIdUrl = `${baseUrl}${apiConstants.attendance.getAttendanceByEmployeeId}`;
  constructor(private http: HttpClient) { }

  getAttendanceList(
    payload: AttendanceRequestPayload | {}
  ): Observable<ResponseType<AttendanceData>> {
    return this.http.post<ResponseType<AttendanceData>>(this.apiUrl, payload);
  }
  getAttendanceListById(payload: AttendanceRequestPayload): Observable<ResponseType<EmployeeByIdData>> {
    return this.http.post<ResponseType<EmployeeByIdData>>(this.attendanceByIdUrl, payload);
  }
}
