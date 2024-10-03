import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './features/public/not-found/not-found.component';
import { authGuard, publicGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [publicGuard],
    loadChildren: () =>
      import('./core/layout/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'admin',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./core/layout/private/private.module').then(
        (m) => m.PrivateModule
      ),
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
