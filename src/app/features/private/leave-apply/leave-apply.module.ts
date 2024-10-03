import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveApplyRoutingModule } from './leave-apply-routing.module';
import { LeaveApplyComponent } from './leave-apply.component';
import { MaterialsModule } from '../../../materials/materials.module';
import { EffectsModule } from '@ngrx/effects';
import { LeaveEffects } from './store/leave-apply-submit/leave.effects';
import { LeaveEditEffect } from './store/leave-apply-form/leave-edit.effects';
import { StoreModule } from '@ngrx/store';
import { leaveReducer } from './store/leave-apply-submit/leave.reducer';
import { LeaveEditReducer } from './store/leave-apply-form/leave-edit.reducer';
import { DayLeaveDropdownEffects } from '@shared/store/day-leave-dropdown/day-leave.effects';
import { FetchDayLeaveReducer } from '@shared/store/day-leave-dropdown/day-leave.reducer';
import { LeaveTypeDropdownEffects } from '@shared/store/add-staff-dropdowns/leave-type-dropdown/leave-type.effects';
import { FetchLeaveTypeReducer } from '@shared/store/add-staff-dropdowns/leave-type-dropdown/leave-type.reducer';


@NgModule({
  declarations: [
    LeaveApplyComponent
  ],
  imports: [
    CommonModule,
    LeaveApplyRoutingModule,
    MaterialsModule,
    StoreModule.forFeature('leaveApply', leaveReducer),
    StoreModule.forFeature('leaveEdit', LeaveEditReducer),
    StoreModule.forFeature('leaveTypeDropDown', FetchLeaveTypeReducer),
    StoreModule.forFeature('dayLeaveDropdown', FetchDayLeaveReducer),
    EffectsModule.forFeature([
      LeaveEffects,
      LeaveEditEffect,
      DayLeaveDropdownEffects,
      LeaveTypeDropdownEffects,
    ]),
  ]
})
export class LeaveApplyModule { }
