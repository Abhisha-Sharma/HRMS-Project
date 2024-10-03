import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Policy } from '../models/policy.model';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private apiUrl = 'https://zg0qm2qz-1595.inc1.devtunnels.ms/apigateway/attendanceLeave/Policy/CreatePolicy';

  constructor(private http: HttpClient) {}

  getPolicies(): Observable<Policy[]> {
    return this.http.get<Policy[]>(`${this.apiUrl}/policies`);
  }

  getPolicy(id: string): Observable<Policy> {
    return this.http.get<Policy>(`${this.apiUrl}/policies/${id}`);
  }

  addPolicy(policy: Policy): Observable<Policy> {
    return this.http.post<Policy>(`${this.apiUrl}/policies`, policy);
  }

  updatePolicy(id: string, policy: Policy): Observable<Policy> {
    return this.http.put<Policy>(`${this.apiUrl}/policies/${id}`, policy);
  }

  deletePolicy(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/policies/${id}`);
  }
}
