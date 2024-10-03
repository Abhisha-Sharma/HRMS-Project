/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  baseUrl,
} from '@shared/constants/global.constants';
import { apiConstants } from '@shared/constants/api.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private baseUrl = 'https://zg0qm2qz-1595.inc1.devtunnels.ms/apigateway/user/';

  constructor(private http: HttpClient, private router: Router) {}

  setToken(token: string): void {
    if (token !== null) {
      localStorage.setItem('token', token);
    }
  }

  setEmployeeId(employeeId: string): void {
    if (Number(employeeId) !== 0) {
      localStorage.setItem('employeeId', employeeId);
    }
  }

  setRole(role: string): void {
    if (role !== null) {
      localStorage.setItem('role', role);
    }
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getEmployeeId(): string | null {
    return localStorage.getItem('employeeId');
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return token ? true : false;
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http
      .post(`${baseUrl}${apiConstants.login.login}`, credentials, { headers })
      .pipe(
        map((response: any) => {
          this.setToken(response.data.token);
          this.setEmployeeId(response.data.employeeId);
          this.setRole(response.data.role);
          return response;
        }),
        catchError((error) => {
          return throwError(() => new Error('Failed to login'));
        })
      );
  }

  requestOTP(email: string): Observable<any> {
    return this.http
      .post(`${baseUrl}${apiConstants.login.requestOTP}`, { email })
      .pipe(
        catchError((error) => {
          return throwError(() => new Error('Failed to request OTP'));
        })
      );
  }

  resetPassword(token: string, newPassword: string): Observable<any> {
    return this.http
      .post(`${baseUrl}${apiConstants.login.resetPassword}`, {
        token,
        newPassword,
      })
      .pipe(
        catchError((error) => {
          return throwError(() => new Error('Failed to reset password'));
        })
      );
  }

  changePassword(
    currentPassword: string,
    newPassword: string
  ): Observable<any> {
    return this.http
      .post(`${baseUrl}${apiConstants.login.changePassword}`, {
        currentPassword,
        newPassword,
      })
      .pipe(
        catchError((error) => {
          return throwError(() => new Error('Failed to change password'));
        })
      );
  }

  // getUserDetailsFromToken(): Observable<any> {
  //   return this.http.get(`${baseUrl}getUserDetails`).pipe(
  //     catchError((error) => {
  //       return throwError(() => new Error('Failed to get user details'));
  //     })
  //   );
  // }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('employeeId');
    localStorage.removeItem('role');
    this.router.navigate(['login']);
  }
}
