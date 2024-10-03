import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private apiUrl ='https://s40x83tv-1595.inc1.devtunnels.ms/apigateway/user/Login/ChangePassword';

  constructor(private http:HttpClient){}

  changePassword(currentPassword:string,newPassword:string):Observable<void>{
    return this.http.post<void>(`$this.apiUrl)/change-password`,{currentPassword,newPassword})
  }
}
