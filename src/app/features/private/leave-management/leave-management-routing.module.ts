import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveManagementComponent } from './leave-management.component';
import { LeaveApproveRejectComponent } from './components/leave-approve-reject/leave-approve-reject.component';
import { ROUTE_CONSTANT } from '@shared/constants/routes.constant';

const routes: Routes = [
  { path: '', component: LeaveManagementComponent },
  { path: ROUTE_CONSTANT.id, component: LeaveManagementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveManagementRoutingModule {}
