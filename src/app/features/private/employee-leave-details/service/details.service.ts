import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConstants } from '@shared/constants/api.constants';
import { baseUrl } from '@shared/constants/global.constants';
import { ILeaveDetailsData, ILeaveDetailsResponse } from '../types/types';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http:HttpClient) { }

  fetchAllLeaveBalanceDetails():Observable<ILeaveDetailsData[]>{
    return this.http.get<ILeaveDetailsResponse>(`${baseUrl}${apiConstants.leave.getAllLeaveBalance}`).pipe(
      map(response =>{
        return response.data
      })
    );
  }
}
