import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { ProfileEditComponent } from '../profile-details/profile-edit/profile-edit.component';
import { DialogComponent } from '@shared/components/dialog/dialog.component';

const routes: Routes = [
  // { path: '', redirectTo: 'staff_management', pathMatch:'full' },
  { path: 'staff-list', component: StaffListComponent },
  { path: 'add-staff', component: AddStaffComponent },
  { path: '', component: StaffListComponent },
  {
    path: 'edit-staff/:id',
    component: AddStaffComponent,
  },
  {
    path: 'profile-details/:id',
    component: ProfileEditComponent,
  },
  { path: 'shared/components/DialogComponent', component: DialogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRegistrationRoutingModule { }
