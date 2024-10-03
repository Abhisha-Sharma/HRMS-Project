import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { SidebarModule } from '../../../features/private/sidebar/sidebar.module';
import { NavbarModule } from '../../../features/private/navbar/navbar.module';

@NgModule({
  declarations: [
    PrivateComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SidebarModule,
    NavbarModule
  ]
})
export class PrivateModule { }
