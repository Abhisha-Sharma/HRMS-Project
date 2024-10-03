import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceDetailsComponent } from './attendance-details/attendance-details.component';
import { CommonModule } from '@angular/common';
import { AttendanceByIdComponent } from './attendance-by-id/attendance-by-id.component';

const routes: Routes = [
  {
    path: '',
    component: AttendanceDetailsComponent,
  },
  {
    path: ':id',
    component: AttendanceByIdComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class AttendanceRoutingModule { }
