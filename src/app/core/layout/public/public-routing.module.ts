import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTE_CONSTANT } from '@shared/constants/routes.constant';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../../features/public/public.module').then(
        (m) => m.PublicModule
      ),
  },
  {
    path: ROUTE_CONSTANT.changePassword,
    loadChildren: () =>
      import(
        '../../../features/public/change-password/change-password.module'
      ).then((m) => m.ChangePasswordModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
