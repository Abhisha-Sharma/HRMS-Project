import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SidebarRoutingModule } from './sidebar-routing.module';

import { MaterialsModule } from '../../../materials/materials.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, SidebarRoutingModule, MaterialsModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
