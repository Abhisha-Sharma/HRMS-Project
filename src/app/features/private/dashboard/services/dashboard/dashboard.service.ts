import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from '../../types/leave-summary.interface';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private apiUrl = 'http://localhost:3000/dashboard';
  constructor(private http: HttpClient) {}

  getDashbaordData(): Observable<Dashboard[]> {
    return this.http.get<Dashboard[]>(this.apiUrl);
  }
}
