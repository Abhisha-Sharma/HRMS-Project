import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LeaveStatus } from '../../types/leave-summary.interface';
import { EmployeeOnLeaveToday } from '../../store/onLeaveToday/onLeaveToday.state';
import { Store } from '@ngrx/store';
import {
  selectEmployeeOnLeaveTodayData,
  selectEmployeeOnLeaveTodayDataError,
  selectEmployeeOnLeaveTodayDataLoading,
} from '../../store/onLeaveToday/onLeaveToday.selectors';
import { FETCH_EMPLOYEE_ON_LEAVE_TODAY } from '../../store/onLeaveToday/onLeaveToday.actions';

@Component({
  selector: 'app-on-leave-today',
  templateUrl: './on-leave-today.component.html',
  styleUrl: './on-leave-today.component.scss',
})
export class OnLeaveTodayComponent {
  employeeOnLeaveToday$: Observable<LeaveStatus[]> = of([]);
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);

  selectorInitilizer_EmployeeOnLeaveToday(): void {
    this.employeeOnLeaveToday$ = this.store_EmployeeOnLeaveToday.select(
      selectEmployeeOnLeaveTodayData
    );
    this.loading$ = this.store_EmployeeOnLeaveToday.select(
      selectEmployeeOnLeaveTodayDataLoading
    );
    this.error$ = this.store_EmployeeOnLeaveToday.select(
      selectEmployeeOnLeaveTodayDataError
    );
  }

  ngOnInit(): void {
    this.selectorInitilizer_EmployeeOnLeaveToday();
    this.store_EmployeeOnLeaveToday.dispatch(FETCH_EMPLOYEE_ON_LEAVE_TODAY());
  }

  constructor(
    private store_EmployeeOnLeaveToday: Store<EmployeeOnLeaveToday>
  ) {}
}
