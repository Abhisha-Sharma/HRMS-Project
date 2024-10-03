import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/services/auth.service'
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ROUTE_CONSTANT } from '@shared/constants/routes.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  hide: boolean=true;
  route_constant = ROUTE_CONSTANT;

  constructor(private auth: AuthService, private router: Router, private fb: FormBuilder, private snackBar :MatSnackBar) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      
    });
  }


  onSubmit(): void {
    if (this.loginForm.valid && this.loginForm.valid) {
      this.auth.login(this.loginForm.value as {email:string,password:string}).subscribe(
        (response) =>
        { 
          if(response.data.token !== null){
            this.router.navigate(['admin/dashboard']);
            this.openSnackBar('LogIn Successfully')
          }
          else{
            this.router.navigate(['/login'])
          }
        },
        (err) =>
        {
          this.openSnackBar('Failed to Login')
        }
      );
    }
  }
  togglePasswordVisibility():void{
    this.hide=!this.hide;
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
      panelClass: ['snack-bar']
    });

}
}
