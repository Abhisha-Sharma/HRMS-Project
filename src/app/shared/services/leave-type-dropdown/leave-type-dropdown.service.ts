import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LeaveTypeDropDownResponse } from '@shared/store/add-staff-dropdowns/leave-type-dropdown/leave-type.state';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class LeaveTypeDropdownService {
  // private apiUrl = `http://localhost:3000/LeaveType`;
  private apiUrl = `http://localhost:5262/apigateway/attendanceLeave/EnumData/GetAllLeaveType`;

  constructor(private http: HttpClient) {}

  getLeaveTypeDropdown(): Observable<LeaveTypeDropDownResponse> {
    return this.http.get<LeaveTypeDropDownResponse>(this.apiUrl);
  }
}
