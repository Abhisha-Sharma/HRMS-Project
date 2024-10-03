import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliciesRoutingModule } from './policies-routing.module';
import { PoliciesComponent } from './policies.component';
import { PolicyListComponent } from './components/policy-list/policy-list.component';
import { PolicyFormComponent } from './components/policy-form/policy-form.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import {  MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    PoliciesComponent,
    PolicyListComponent,
    PolicyFormComponent,
  ],
  imports: [
    CommonModule,
    PoliciesRoutingModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatListModule,

  ]
})
export class PoliciesModule { }
