import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../../../materials/materials.module';
import { AttendanceDetailsComponent } from './attendance-details/attendance-details.component';
import { AttendanceCalanderComponent } from './attendance-calander/attendance-calander.component';
import { AttendanceRoutingModule } from './attendance-routing.module';
import { attendanceReducer } from './attendance-details/store/attendance-details.reducer';
import { AttendanceEffects } from './attendance-details/store/attendance-details.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DepartmentEffects } from '@shared/store/add-staff-dropdowns/department/department.effects';
import { departmentReducer } from '@shared/store/add-staff-dropdowns/department/department.reducer';
import { AttendanceByIdComponent } from './attendance-by-id/attendance-by-id.component';
import { attendanceReducerById } from './attendance-by-id/store/attendance-details-by-id.reducer';
import { AttendanceByIdEffects } from './attendance-by-id/store/attendance-details-by-id.effects';

@NgModule({
  declarations: [AttendanceDetailsComponent, AttendanceCalanderComponent, AttendanceByIdComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    AttendanceRoutingModule,
    StoreModule.forFeature('attendance', attendanceReducer),
    StoreModule.forFeature('department', departmentReducer),
    StoreModule.forFeature('attendanceById', attendanceReducerById),


    EffectsModule.forFeature([
      AttendanceEffects,
      DepartmentEffects,
      AttendanceByIdEffects
    ]),
  ],
  exports: [AttendanceDetailsComponent, AttendanceCalanderComponent],
})
export class AttendanceModule { }
