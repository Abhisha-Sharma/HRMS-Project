import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ImageData, ImageResponse, LeaveAcceptRejectResponse, LeaveRequestList, LeaveRequestListResponse } from '../types/types';
import { baseUrl } from '@shared/constants/global.constants';
import { apiConstants } from '@shared/constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class LeaveConfirmationService {

  // private apiUrl = "http://localhost:5262/apigateway/attendanceLeave/LeaveRequest/GetEmployeeLeaveRequestList";

  // private imgUrl = "http://localhost:5262/apigateway/user/Document/GetProfilePictureOfEmp?empId="

  // private approveRejectUrl = "http://localhost:5262/apigateway/attendanceLeave/LeaveRequest/ApproveRejectLeaveRequest?id="

  constructor(private http:HttpClient) { }

  fetchRequestList(): Observable<LeaveRequestList[]> {
    return this.http.post<LeaveRequestListResponse>(`${baseUrl}${apiConstants.leave.getEmployeeLeaveRequestList}`,{}).pipe(
      map((response) => {
        // console.log('API response', response);
        if (response && response.data && response.data.employeeLeaveRequestResponse) {
          return response.data.employeeLeaveRequestResponse;
        }
        return [];
      })
    );
  }
  
  fetchImage(id:string|number):Observable<ImageData>{
    return this.http.get<ImageResponse>(`${baseUrl}${apiConstants.getProfilePictureOfEmp}${id}`).pipe(
      map((response) => ({
          imageDataBase64: response.data.imageDataBase64,
          imageName: response.data.imageName,
          employeeId: response.data.employeeId,
      }))
    );
  }

  leaveAcceptReject(id:string|number, option:number|string):Observable<LeaveAcceptRejectResponse>{
    return this.http.put<LeaveAcceptRejectResponse>(`${baseUrl}${apiConstants.leave.approveRejectLeaveRequest}?id=${id}&status=${option}`,{})
  }
}
