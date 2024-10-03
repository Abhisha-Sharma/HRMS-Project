import { Injectable } from '@angular/core';
import { baseUrl } from '../../../constants/global.constants';
import { apiConstants } from '../../../constants/api.constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseType } from '../../../models/response.model';
import { RoleData } from '../../../models/role.interface';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiUrl = `${baseUrl}${apiConstants.getRolesList}`
  constructor(private http: HttpClient) { }
  getRoleList(): Observable<ResponseType<RoleData[]>> {
    return this.http.get<ResponseType<RoleData[]>>(this.apiUrl);
  }
}
