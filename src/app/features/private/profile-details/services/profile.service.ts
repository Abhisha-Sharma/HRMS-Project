import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileDetails, ProfilePicture } from '../models/profile-details';
import { baseUrl } from '@shared/constants/global.constants';
import { ResponseType } from '@shared/models/response.model';
import { apiConstants } from '@shared/constants/api.constants';
@Injectable({
  providedIn: 'root',
})
export class ProfileDetailsService {
  constructor(private http: HttpClient) {}

  getProfileDetailsById(
    profileId: string
  ): Observable<ResponseType<ProfileDetails>> {
    return this.http.get<ResponseType<ProfileDetails>>(
      `${baseUrl}${apiConstants.employeeDetails.getEmployeeDetailById}?id=${profileId}`
    );
  }

  getProfilePictureofEmployeeById(
    profileId: string
  ): Observable<ResponseType<ProfilePicture>> {
    return this.http.get<ResponseType<ProfilePicture>>(
      `${baseUrl}${apiConstants.employeeDetails.getProfilePictureofEmployee}?empId=${profileId}`
    );
  }
}
