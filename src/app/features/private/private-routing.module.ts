import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ROUTE_CONSTANT } from '@shared/constants/routes.constant';
import { adminRoleGuard } from 'src/app/core/guards/admin-role.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: ROUTE_CONSTANT.profileDetails,
    loadChildren: () =>
      import('./profile-details/profile-details.module').then(
        (m) => m.ProfileDetailsModule
      ),
  },
  {
    path: ROUTE_CONSTANT.staffRegistration,
    loadChildren: () =>
      import('./staff-registration/staff-registration.module').then(
        (m) => m.StaffRegistrationModule
      ),
    canActivate: [adminRoleGuard],
  },
  {
    path: ROUTE_CONSTANT.dashboard,
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },

  {
    path: ROUTE_CONSTANT.leaveApply,
    loadChildren: () =>
      import('./leave-apply/leave-apply.module').then(
        (m) => m.LeaveApplyModule
      ),
  },
  {
    path: ROUTE_CONSTANT.leaveManagement,
    loadChildren: () =>
      import('./leave-management/leave-management.module').then(
        (m) => m.LeaveManagementModule
      ),
  },
  {
    path: ROUTE_CONSTANT.staffManagement,
    loadChildren: () =>
      import('./staff-registration/staff-registration.module').then(
        (m) => m.StaffRegistrationModule
      ),
    canActivate: [adminRoleGuard],
  },
  {
    path: ROUTE_CONSTANT.attendance,
    loadChildren: () =>
      import('./attendance/attendance.module').then((m) => m.AttendanceModule),

  },
  {
    path: ROUTE_CONSTANT.policies,
    loadChildren: () =>
      import('./policies/policies.module').then((m) => m.PoliciesModule),
  },
  {
    path: ROUTE_CONSTANT.leaveConfirmationPage,
    loadChildren: () =>
      import('./leave-confirmation-page/leave-confirmation-page.module').then(
        (m) => m.LeaveConfirmationPageModule
      ),
    canActivate: [adminRoleGuard],
  },
  // {
  //   path: ROUTE_CONSTANT.employeeLeaveManagement,
  //   loadChildren: () =>
  //     import('./employee-leave-details/employee-leave-details.module').then(
  //       (m) => m.EmployeeLeaveDetailsModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
