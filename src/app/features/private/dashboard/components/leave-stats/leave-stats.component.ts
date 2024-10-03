import {
  selectAllUsersPendingLeaveRequestDataLoading,
  selectAllUsersPendingLeaveRequestDataError,
} from './../../store/leave-summary/leave-summary.selectors';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { LeaveRequests } from '../../types/leave-summary.interface';
import { AllUsersPendingLeaveRequestState } from '../../store/leave-summary/leave-summary.state';
import { selectAllUsersPendingLeaveRequestData } from '../../store/leave-summary/leave-summary.selectors';
import { FETCH_LEAVE_REQUESTS } from '../../store/leave-summary/leave-summary.actions';
@Component({
  selector: 'app-leave-stats',
  templateUrl: './leave-stats.component.html',
  styleUrl: './leave-stats.component.scss',
})
export class LeaveStatsComponent {
  pendingLeaveRequestData$: Observable<LeaveRequests[]> = of([]);
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);

  get pendingLeaveCount$(): Observable<number> {
    return this.pendingLeaveRequestData$.pipe(
      map(
        (item) =>
          item.filter((data) => data.leaveRequestStatus === 'Pending').length
      )
    );
  }

  selectorInitilizerAllPendingLeaveRequests(): void {
    this.pendingLeaveRequestData$ = this.allPendingLeaveRequestsStore.select(
      selectAllUsersPendingLeaveRequestData
    );
    this.loading$ = this.allPendingLeaveRequestsStore.select(
      selectAllUsersPendingLeaveRequestDataLoading
    );
    this.error$ = this.allPendingLeaveRequestsStore.select(
      selectAllUsersPendingLeaveRequestDataError
    );
  }

  ngOnInit(): void {
    this.selectorInitilizerAllPendingLeaveRequests();
    this.allPendingLeaveRequestsStore.dispatch(FETCH_LEAVE_REQUESTS());
  }

  constructor(
    private allPendingLeaveRequestsStore: Store<AllUsersPendingLeaveRequestState>
  ) {}
}
4592;
