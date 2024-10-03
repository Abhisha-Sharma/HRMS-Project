import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { OTPComponent } from './otp/otp.component';
import { ROUTE_CONSTANT } from '@shared/constants/routes.constant';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: ROUTE_CONSTANT.login,
    loadChildren: () =>
      import('./login-page/login-page.module').then((m) => m.LoginPageModule),
  },
  {
    path: ROUTE_CONSTANT.forgotPassword,
    component: ForgetPasswordComponent,
  },
  {
    path: ROUTE_CONSTANT.otp,
    component: OTPComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
