import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AttendanceData, EmployeeAttendanceRecord, EmployeeAttendanceRecordById, EmployeeAttendanceRecordForTable, EmployeeAttendanceRecordForTableByID, EmployeeByIdData } from '../model/attendance-details.interface';
import { select, Store } from '@ngrx/store';
import { loadAttendanceListById } from './store/attendance-details-by-id.actions';
import { selectAttendanceByIdRecords } from './store/attendance-details-by-id.selector';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { cl } from '@fullcalendar/core/internal-common';

@Component({
  selector: 'app-attendance-by-id',
  templateUrl: './attendance-by-id.component.html',
  styleUrl: './attendance-by-id.component.scss'
})
export class AttendanceByIdComponent implements OnInit {

  dataSource!: MatTableDataSource<EmployeeAttendanceRecordById>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  records$: Observable<EmployeeByIdData | undefined> = of(undefined);
  id: string = ''
  displayedColumns: (keyof EmployeeAttendanceRecordForTableByID)[] = [
    'SN',
    'employeeId',
    'checkIn',
    'checkInReason',
    'checkOut',
    'checkOutReason', 'workLocation',
    'workingHour'


  ];

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  goBack(): void {
    this.router.navigate(['admin/attendance'])
  }
  ngOnInit(): void {
    this.getIdFromRoute();
    this.store.dispatch(loadAttendanceListById({ payload: { employeeId: this.id, sort: { sortBy: 'Asc' } } }));
    this.selectorInitializer();

  }
  selectorInitializer(): void {
    this.records$ = this.store.pipe(select(selectAttendanceByIdRecords));
    this.records$.subscribe((data) => {
      this.dataSource = new MatTableDataSource(data?.data);
    });
  }

  getIdFromRoute(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') ?? '';
      // console.log(this.id)
    });
  }
}
