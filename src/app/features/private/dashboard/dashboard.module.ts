import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MaterialsModule } from '../../../materials/materials.module';
import { LeaveStatsComponent } from './components/leave-stats/leave-stats.component';
import { CheckingInComponent } from './components/checking-in/checking-in.component';
import { StoreModule } from '@ngrx/store';
import { dashboardReducer } from './store/dashboard/dashboard.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffect } from './store/dashboard/dashboard.effect';
import { HttpClientModule } from '@angular/common/http';
import { CheckingInDialogComponent } from './components/checking-in-dialog/checking-in-dialog.component';
import { checkCheckedInStatusReducer } from './store/checkin-in/checkin-in.reducer';
import { CheckCheckedInStatusEffects } from './store/checkin-in/checkin-in.effects';
import { TodaysAttendanceComponent } from './components/todays-attendance/todays-attendance.component';
import { todayAttendanceSummaryReducer } from './store/todays-attendance/today-attendance.reducer';
import { TodayAttendanceSummaryEffect } from './store/todays-attendance/today-attendance.effects';
import { allUsersPendingLeaveRequestsReducer } from './store/leave-summary/leave-summary.reducer';
import { allUsersPendingLeaveRequestEffects } from './store/leave-summary/leave -summary.effects';
import { ProfileDetailsEffect } from '../profile-details/store/profile-details.effect';
import { profileDetailsReducer } from '../profile-details/store/profile-details.reducer';
import { OnLeaveTomorrowComponent } from './components/on-leave-tomorrow/on-leave-tomorrow.component';
import { OnLeaveTodayComponent } from './components/on-leave-today/on-leave-today.component';
import { employeeOnLeaveTodayReducer } from './store/onLeaveToday/onLeaveToday.reducers';
import { onLeaveTodayEffect } from './store/onLeaveToday/onLeaveToday.effect';
import { employeeOnLeaveTomorrowReducer } from './store/onLeaveTomorrow/onLeaveTomorrow.reducers';
import { onLeaveTomorrowEffect } from './store/onLeaveTomorrow/onLeaveTomorrow.effect';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { calenderReducer } from './store/calender/calender.reducer';
import { CalenderEffects } from './store/calender/calender.effects';
import { attendanceReducer } from '../attendance/attendance-details/store/attendance-details.reducer';
import { AttendanceEffects } from '../attendance/attendance-details/store/attendance-details.effects';
import { AttendanceByIdEffects } from '../attendance/attendance-by-id/store/attendance-details-by-id.effects';
import { attendanceReducerById } from '../attendance/attendance-by-id/store/attendance-details-by-id.reducer';

@NgModule({
  declarations: [
    DashboardComponent,
    LeaveStatsComponent,
    CheckingInComponent,
    CheckingInDialogComponent,
    TodaysAttendanceComponent,
    OnLeaveTomorrowComponent,
    OnLeaveTodayComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MaterialsModule,
    FullCalendarModule,
    HttpClientModule,
    StoreModule.forFeature('dashboard', dashboardReducer),
    EffectsModule.forFeature([DashboardEffect]),
    StoreModule.forFeature('checkedInStatus', checkCheckedInStatusReducer),
    EffectsModule.forFeature([CheckCheckedInStatusEffects]),
    StoreModule.forFeature(
      'todayAttendanceSummary',
      todayAttendanceSummaryReducer
    ),
    EffectsModule.forFeature([TodayAttendanceSummaryEffect]),
    StoreModule.forFeature(
      'allUsersPendingLeaveRequest',
      allUsersPendingLeaveRequestsReducer
    ),
    EffectsModule.forFeature([allUsersPendingLeaveRequestEffects]),
    StoreModule.forFeature('profileDetails', profileDetailsReducer),
    EffectsModule.forFeature([ProfileDetailsEffect]),
    StoreModule.forFeature('employeeOnLeaveToday', employeeOnLeaveTodayReducer),
    EffectsModule.forFeature([onLeaveTodayEffect]),
    StoreModule.forFeature(
      'employeeOnLeaveTomorrow',
      employeeOnLeaveTomorrowReducer
    ),
    EffectsModule.forFeature([onLeaveTomorrowEffect]),
    // StoreModule.forFeature('calendar', calenderReducer),
    // EffectsModule.forFeature([CalenderEffects]),
    StoreModule.forFeature('attendanceById', attendanceReducerById),
    EffectsModule.forFeature([AttendanceByIdEffects]),
  ],
})
export class DashboardModule {}
