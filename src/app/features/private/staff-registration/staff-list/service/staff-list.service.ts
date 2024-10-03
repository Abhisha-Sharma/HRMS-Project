import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiConstants } from '@shared/constants/api.constants';
import { baseUrl } from '@shared/constants/global.constants';
import { ResponseType } from '@shared/models/response.model';
import { StaffList } from '../model/staff-list';
@Injectable({
  providedIn: 'root',
})
export class StaffListService {
  private apiUrl = `${baseUrl}${apiConstants.getEmployeeList}`;
  private apiUrlForGetDetails = `${baseUrl}${apiConstants.getEmployeeById}`;
  constructor(private http: HttpClient) { }
  getStaffList(): Observable<ResponseType<StaffList[]>> {
    return this.http.get<ResponseType<StaffList[]>>(this.apiUrl);
  }

  getStaffDetailsById(id: string | number): Observable<ResponseType<StaffList>> {
    return this.http.get<ResponseType<StaffList>>(`${this.apiUrlForGetDetails}?id=${id}`);
  }

}
