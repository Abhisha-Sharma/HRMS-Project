import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { ROUTE_CONSTANT } from '@shared/constants/routes.constant';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../../../features/private/private.module').then(
            (m) => m.PrivateModule
          ),
      },
    ],
  },
  // {
  //   path: ROUTE_CONSTANT.attendance,
  //   loadChildren: () =>
  //     import('../../../features/private/attendance/attendance.module').then(
  //       (m) => m.AttendanceModule
  //     ),
  // },
  // {
  //   path: ROUTE_CONSTANT.profileDetails,
  //   loadChildren: () =>
  //     import(
  //       '../../../features/private/profile-details/profile-details.module'
  //     ).then((m) => m.ProfileDetailsModule),
  // },
  // {
  //   path: ROUTE_CONSTANT.staffRegistration,
  //   loadChildren: () =>
  //     import(
  //       '../../../features/private/staff-registration/staff-registration.module'
  //     ).then((m) => m.StaffRegistrationModule),
  // },
  // {
  //   path: ROUTE_CONSTANT.dashboard,
  //   loadChildren: () =>
  //     import('../../../features/private/dashboard/dashboard.module').then(
  //       (m) => m.DashboardModule
  //     ),
  // },
  // {
  //   path: ROUTE_CONSTANT.leaveApply,
  //   loadChildren: () =>
  //     import('../../../features/private/leave-apply/leave-apply.module').then(
  //       (m) => m.LeaveApplyModule
  //     ),
  // },
  // {
  //   path: ROUTE_CONSTANT.leaveManagement,
  //   loadChildren: () =>
  //     import(
  //       '../../../features/private/leave-management/leave-management.module'
  //     ).then((m) => m.LeaveManagementModule),
  // },
  // {
  //   path: ROUTE_CONSTANT.staffManagement,
  //   loadChildren: () =>
  //     import(
  //       '../../../features/private/staff-registration/staff-registration.module'
  //     ).then((m) => m.StaffRegistrationModule),
  // },
  // {
  //   path: ROUTE_CONSTANT.policies,
  //   loadChildren: () =>
  //     import('../../../features/private/policies/policies.module').then(
  //       (m) => m.PoliciesModule
  //     ),
  // },
  // {
  //   path: ROUTE_CONSTANT.leaveConfirmationPage,
  //   loadChildren: () =>
  //     import(
  //       '../../../features/private/leave-confirmation-page/leave-confirmation-page.module'
  //     ).then((m) => m.LeaveConfirmationPageModule),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
