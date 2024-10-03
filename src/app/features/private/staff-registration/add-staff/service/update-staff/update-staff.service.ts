import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterStaffPayload } from '../../model/add-staff';
import { Observable } from 'rxjs';
import { baseUrl } from '../../../../../../shared/constants/global.constants';
import { apiConstants } from '../../../../../../shared/constants/api.constants';
import { ResponseType } from '../../../../../../shared/models/response.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UpdateStaffService {
  private updateEmployeeUrl = `${baseUrl}${apiConstants.updateEmployee}`

  updateEmployeeData(id: number, updatedData: RegisterStaffPayload): Observable<ResponseType<boolean>> {
    return this.http.put<ResponseType<boolean>>(`${this.updateEmployeeUrl}`, { ...updatedData, id });
  }
  constructor(private http: HttpClient, private router: Router) { }

  nagivateTo(): void {
    this.router.navigate(['/admin/staff-registration/staff-list']);

  }

}
