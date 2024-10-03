import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LeaveRequestList } from '../../types/leave-table';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveConfirmationService {

  private baseUrl = "http://localhost:3000/requestList";

  constructor(private http:HttpClient) { }

  fetchRequestList():Observable<LeaveRequestList[]>{
    return this.http.get<LeaveRequestList[]>(this.baseUrl);
  }
}
