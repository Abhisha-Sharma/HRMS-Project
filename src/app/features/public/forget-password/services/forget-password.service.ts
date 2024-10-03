import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

  private apiUrl ='https://zg0qm2qz-1595.inc1.devtunnels.ms/apigateway/user/Login/RequestOTP';

  constructor(private http : HttpClient ) {}

  sendPasswordResetLink(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}send-reset-link`, { email }).pipe(
      catchError(error => {
        return throwError(() => new Error('Failed to send password reset link'));
      })
    );
  }

}
