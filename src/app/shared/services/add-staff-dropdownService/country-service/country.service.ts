import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseType } from '../../../models/response.model';
import { CountryData } from '../../../models/country.interface';
import { baseUrl } from '../../../constants/global.constants';
import { apiConstants } from '../../../constants/api.constants';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = `${baseUrl}${apiConstants.getCountryList}`;
  constructor(private http: HttpClient) {}
  getCountryList(): Observable<ResponseType<CountryData[]>> {
    return this.http.get<ResponseType<CountryData[]>>(this.apiUrl);
  }
}
