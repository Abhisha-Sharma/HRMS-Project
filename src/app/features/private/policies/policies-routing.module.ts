import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicyFormComponent } from './components/policy-form/policy-form.component';
import { PolicyListComponent } from './components/policy-list/policy-list.component';

const routes: Routes = [

  {
    path: '',
    component: PolicyListComponent
  },
  {
    path:'policy-list',
    component: PolicyListComponent
  },
  {
    path: 'policy-form',
    
    component: PolicyFormComponent
  },
  {
    path: 'edit-policy/:id',
    component: PolicyFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliciesRoutingModule { }
