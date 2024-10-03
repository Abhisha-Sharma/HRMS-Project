import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDetailsComponent } from './profile-details.component';
import { AddStaffComponent } from '../staff-registration/add-staff/add-staff.component';

const routes: Routes = [
  { path: '', component: ProfileDetailsComponent },
  {
    path: ':id',
    component: ProfileDetailsComponent,
  },
  {
    path: 'edit-profile/:id',
    component: AddStaffComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileDetailsRoutingModule {}
