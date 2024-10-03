import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LeaveTableData } from '../../types/leave-table';
import { Observable, of } from 'rxjs';
import { select, Store } from '@ngrx/store';

import {
  selectLeaveData,
  selectLeaveDataError,
  selectLeaveDataLoading,
} from '../../store/leave-table/leave-table-selectors';

import { LEAVE_TABLE_DATA } from '../../store/leave-table/leave-table.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaveFormService } from '../../../leave-apply/services/form/leave-form.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { __makeTemplateObject } from 'tslib';
import { loggedInUser } from '@shared/constants/global.constants';

@Component({
  selector: 'app-leave-table',
  templateUrl: './leave-table.component.html',
  styleUrls: ['./leave-table.component.scss'],
})
export class LeaveTableComponent implements OnInit {
  leaveData$: Observable<LeaveTableData[]> = of([]);
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);
  dataSource = new MatTableDataSource<LeaveTableData>();
  employeeId?: number;

  displayedColumns: string[] = [
    'id',
    'leaveFrom',
    'leaveTo',
    'leaveType',
    'dayLeave',
    'reasonForLeave',
    'leaveRequestStatus',
  ];
  

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private leaveFormService: LeaveFormService
  ) {}

  ngOnInit(): void {
    this.selectorInitializer();
  }
  
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  
  selectorInitializer(): void {
    this.employeeId = Number(this.route.snapshot.paramMap.get('id')) || Number(loggedInUser.id);
    this.store.dispatch(LEAVE_TABLE_DATA({ employeeId : this.employeeId }));
    this.store
      .pipe(select(selectLeaveData))
      .subscribe((data) => {
        this.dataSource.data = data;
        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
        }
        if(this.sort){
          this.dataSource.sort = this.sort;
        }
      });
    this.loading$ = this.store.pipe(select(selectLeaveDataLoading));
    this.error$ = this.store.pipe(select(selectLeaveDataError));
  }
  onEdit(id: number) {
    this.leaveFormService.changeEditMode();
    this.router.navigate([`/admin/leave-apply/${id}`]);
  }
}
