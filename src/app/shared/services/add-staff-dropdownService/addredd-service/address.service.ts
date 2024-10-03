import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConstants } from '@shared/constants/api.constants';
import { baseUrl } from '@shared/constants/global.constants';
import { AddressById } from '@shared/models/address.interface';
import { ResponseType } from '@shared/models/response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private apiUrl = `${baseUrl}${apiConstants.getAddressDetailsById}`;

  constructor(private http: HttpClient) { }
  getAddressById(addressId: number): Observable<ResponseType<AddressById>> {
    return this.http.get<ResponseType<AddressById>>(`${this.apiUrl}?id=${addressId}`)
  }
}
