import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConstants } from '@shared/constants/api.constants';
import { baseUrl } from '@shared/constants/global.constants';
import { map, Observable } from 'rxjs';
import {
  ICalenderPayload,
  ICalenderResponse,
  ICalenderResponseData,
} from '../../types/calender';

@Injectable({
  providedIn: 'root',
})
export class CalenderService {
  constructor(private http: HttpClient) {}

  fetchCalenderData(
    data: ICalenderPayload,
    id: number | string | null
  ): Observable<ICalenderResponseData[]> {
    return this.http
      .post<ICalenderResponse>(
        `${baseUrl}${apiConstants.calender}?empId=${id}`,
        data
      )
      .pipe(
        map((response) => {
          return response.data.data;
        })
      );
  }
}
