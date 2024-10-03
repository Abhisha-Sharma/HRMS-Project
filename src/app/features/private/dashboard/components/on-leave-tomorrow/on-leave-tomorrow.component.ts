import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LeaveStatus } from '../../types/leave-summary.interface';
import {
  selectEmployeeOnLeaveTomorrowData,
  selectEmployeeOnLeaveTomorrowDataError,
  selectEmployeeOnLeaveTomorrowDataLoading,
} from '../../store/onLeaveTomorrow/onLeaveTomorrow.selectors';
import { FETCH_EMPLOYEE_ON_LEAVE_TOMORROW } from '../../store/onLeaveTomorrow/onLeaveTomorrow.actions';
import { EmployeeOnLeaveTomorrow } from '../../store/onLeaveTomorrow/onLeaveTomorrow.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-on-leave-tomorrow',
  templateUrl: './on-leave-tomorrow.component.html',
  styleUrl: './on-leave-tomorrow.component.scss',
})
export class OnLeaveTomorrowComponent {
  employeeOnLeaveTomorrow$: Observable<LeaveStatus[]> = of([]);
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);

  selectorInitilizer_EmployeeOnLeaveTomorrow(): void {
    this.employeeOnLeaveTomorrow$ = this.store_EmployeeOnLeaveTomorrow.select(
      selectEmployeeOnLeaveTomorrowData
    );
    this.loading$ = this.store_EmployeeOnLeaveTomorrow.select(
      selectEmployeeOnLeaveTomorrowDataLoading
    );
    this.error$ = this.store_EmployeeOnLeaveTomorrow.select(
      selectEmployeeOnLeaveTomorrowDataError
    );
  }

  ngOnInit(): void {
    this.selectorInitilizer_EmployeeOnLeaveTomorrow();
    this.store_EmployeeOnLeaveTomorrow.dispatch(
      FETCH_EMPLOYEE_ON_LEAVE_TOMORROW()
    );
  }

  constructor(
    private store_EmployeeOnLeaveTomorrow: Store<EmployeeOnLeaveTomorrow>
  ) {}
}
