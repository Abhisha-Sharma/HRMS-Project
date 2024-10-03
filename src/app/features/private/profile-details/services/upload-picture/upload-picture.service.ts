import { baseUrl } from '@shared/constants/global.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { apiConstants } from '@shared/constants/api.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadPictureService {
  employeeId: string | null = localStorage.getItem('employeeId');
  uploadPictureForm!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.initializeUploadPictureForm();
  }

  initializeUploadPictureForm(): void {
    this.uploadPictureForm = this.fb.group({
      profilePicture: ['', Validators.required],
    });
  }

  uploadEmployeePicture(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('ImageFile', file);

    return this.http.post(
      `${
        baseUrl + apiConstants.employeeDetails.addDocumentOfEmployee
      }?EmployeeId=${this.employeeId}&DocumentType=1`,
      formData
    );
  }
  editEmployeePicture(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('ImageFile', file);

    return this.http.put(
      `${
        baseUrl + apiConstants.employeeDetails.patchProfilePictureofEmployee
      }?Id=${this.employeeId}&EmployeeId=${this.employeeId}&DocumentType=1`,
      formData
    );
  }
}
