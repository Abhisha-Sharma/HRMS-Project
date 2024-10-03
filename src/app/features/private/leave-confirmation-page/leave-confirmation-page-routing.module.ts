import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveConfirmationPageComponent } from './leave-confirmation-page.component';

const routes: Routes = [{ path: '', component: LeaveConfirmationPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveConfirmationPageRoutingModule { }
