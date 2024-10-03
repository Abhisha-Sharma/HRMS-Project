import { Injectable } from '@angular/core';
import { apiConstants } from '../../../../../../shared/constants/api.constants';
import { baseUrl } from '../../../../../../shared/constants/global.constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteEmployeeService {
  private apiUrl = `${baseUrl}${apiConstants.deleteEmployeeDetails}`;
  constructor(private http: HttpClient) { }
  deleteStaff(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}?id=${id}`);
  }
}
