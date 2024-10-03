import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeLeaveDetailsRoutingModule } from './employee-leave-details-routing.module';
import { EmployeeLeaveDetailsComponent } from './employee-leave-details.component';
import { MaterialsModule } from 'src/app/materials/materials.module';


@NgModule({
  declarations: [
    EmployeeLeaveDetailsComponent
  ],
  imports: [
    CommonModule,
    EmployeeLeaveDetailsRoutingModule,
    MaterialsModule,
  ],
  exports: [EmployeeLeaveDetailsComponent]
})
export class EmployeeLeaveDetailsModule { }
