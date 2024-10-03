import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveApplyComponent } from './leave-apply.component';

const routes: Routes = [{ path: '', component: LeaveApplyComponent },
  { path : ': id', component: LeaveApplyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveApplyRoutingModule { }
