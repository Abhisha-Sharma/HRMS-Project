import { Injectable } from '@angular/core';
import { baseUrl } from '../../../constants/global.constants';
import { apiConstants } from '../../../constants/api.constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseType } from '../../../models/response.model';
import { DepartmentData } from '../../../models/department.interface';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private apiUrl = `${baseUrl}${apiConstants.getDepartmentList}`;
  constructor(private http: HttpClient) {}
  getDeparmentList(): Observable<ResponseType<DepartmentData[]>> {
    return this.http.get<ResponseType<DepartmentData[]>>(this.apiUrl);
  }
}
