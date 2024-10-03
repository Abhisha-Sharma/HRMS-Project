import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TodayAttendanceSummary } from '../../types/todays-attendance.interface';
import { Store } from '@ngrx/store';
import { TodayAttendanceSummaryState } from '../../store/todays-attendance/today-attendance.state';
import {
  selectAttendanceSummaryData,
  selectAttendanceSummaryError,
  selectAttendanceSummaryLoading,
} from '../../store/todays-attendance/today-attendance.selector';
import { FETCH_TODAY_ATTENDANCE_SUMMARY } from '../../store/todays-attendance/today-attendance.actions';
import { TodaysAttendanceService } from '../../services/todays-attendance/todays-attendance.service';

@Component({
  selector: 'app-todays-attendance',
  templateUrl: './todays-attendance.component.html',
  styleUrl: './todays-attendance.component.scss',
})
export class TodaysAttendanceComponent implements OnInit {
  attendanceSummary$: Observable<TodayAttendanceSummary | null> = of(null);
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);
  totalEmployeeOnLeaveTodayCount: number = 0;
  selectorInitilizer(): void {
    this.attendanceSummary$ = this.store.select(selectAttendanceSummaryData);
    this.loading$ = this.store.select(selectAttendanceSummaryLoading);
    this.error$ = this.store.select(selectAttendanceSummaryError);
  }
  constructor(
    private store: Store<TodayAttendanceSummaryState>,
    private todayDetails: TodaysAttendanceService
  ) {}

  ngOnInit(): void {
    this.selectorInitilizer();
    this.store.dispatch(FETCH_TODAY_ATTENDANCE_SUMMARY());
    this.attendanceSummary$.subscribe((data) => {});
    this.employeeOnLeaveToday();
  }

  employeeOnLeaveToday(): void {
    this.todayDetails.fetchTotalLeaveToday().subscribe(
      (res: number) => {
        this.totalEmployeeOnLeaveTodayCount = res;
        // console.log(this.totalEmployeeOnLeaveTodayCount);
      },
      (error) => {
        console.error('Error on fetching total leave today: ', error);
      }
    );
  }
}
