import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DayLeaveDropDownResponse } from '../../store/day-leave-dropdown/day-leave.state';

@Injectable({
  providedIn: 'root'
})
export class DayLeaveDropdownService {

  // private dayLeaveDropDownApi = `http://localhost:3000/DayLeave`;
  private dayLeaveDropDownApi = `http://localhost:5262/apigateway/attendanceLeave/EnumData/GetAllDayLeave`;
  constructor(private http: HttpClient) { }

  getDayLeaveDropdown(): Observable<DayLeaveDropDownResponse>{
    return this.http.get<DayLeaveDropDownResponse>(this.dayLeaveDropDownApi)
  }
}
