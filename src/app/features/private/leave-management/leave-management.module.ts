import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveManagementRoutingModule } from './leave-management-routing.module';
import { LeaveManagementComponent } from './leave-management.component';
import { MaterialsModule } from '../../../materials/materials.module';
import { LeaveTableComponent } from './components/leave-table/leave-table.component';
import { StoreModule } from '@ngrx/store';
import { leaveTableReducer } from './store/leave-table/leave-table-reducer';
import { EffectsModule } from '@ngrx/effects';
import { LeaveTableEffects } from './store/leave-table/leave-table-effects';
import { LeaveAvailableReducer } from './store/leave-available/leave-available.reducer';
import { LeaveAvailableEffects } from './store/leave-available/leave-available.effects';
import { LeaveApproveRejectComponent } from './components/leave-approve-reject/leave-approve-reject.component';
import { LeaveRequestListReducer } from './store/leave-confirmation/leave-confirmation.reducer';
import { LeaveConfirmationEffects } from './store/leave-confirmation/leave-confirmation.effects';

@NgModule({
  declarations: [
    LeaveManagementComponent,
    LeaveTableComponent,
    LeaveApproveRejectComponent
  ],
  imports: [
    CommonModule,
    LeaveManagementRoutingModule,
    MaterialsModule,
    
    StoreModule.forFeature('leaveTableData', leaveTableReducer),
    StoreModule.forFeature('availableLeaveData', LeaveAvailableReducer),
    StoreModule.forFeature('leaveRequestList', LeaveRequestListReducer),
    EffectsModule.forFeature([LeaveTableEffects, LeaveAvailableEffects, LeaveConfirmationEffects]),
  ],
  exports:[LeaveApproveRejectComponent]
})
export class LeaveManagementModule { }
