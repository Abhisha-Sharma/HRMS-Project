import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeLeaveDetailsComponent } from './employee-leave-details.component';

const routes: Routes = [{ path: '', component: EmployeeLeaveDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeLeaveDetailsRoutingModule { }
