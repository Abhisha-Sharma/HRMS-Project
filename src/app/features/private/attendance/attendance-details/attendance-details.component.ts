import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { DepartmentData } from '@shared/models/department.interface';
import { loadDepartments } from '@shared/store/add-staff-dropdowns/department/department.actions';
import { selectAllDepartments } from '@shared/store/add-staff-dropdowns/department/department.selector';
import { Observable, of } from 'rxjs';
import { AttendanceData, AttendanceRequestPayload, EmployeeAttendanceRecord, EmployeeAttendanceRecordForTable } from '../model/attendance-details.interface';
import { FormService } from './service/form/form.service';
import { loadAttendanceList } from './store/attendance-details.actions';
import {
  selectAttendanceError,
  selectAttendanceLoading,
  selectAttendanceRecords,
} from './store/attendance-details.selector';

@Component({
  selector: 'app-attendance-details',
  templateUrl: './attendance-details.component.html',
  styleUrl: './attendance-details.component.scss',
})
export class AttendanceDetailsComponent implements OnInit {
  maxDate!: Date;
  records$: Observable<AttendanceData | undefined> = of(undefined);
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);
  departments$: Observable<DepartmentData[]> = of([]);
  dataSource!: MatTableDataSource<EmployeeAttendanceRecord>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  displayedColumns: (keyof EmployeeAttendanceRecordForTable)[] = [
    'SN',
    'employeeName',
    'employeeId',
    'departmentName',
    'departmentId',
    'checkIn',
    'checkInReason',
    'checkOut',
    'checkOutReason',
    'workingHour',
    'workLocation',
    'actions'
  ];

  get attendanceFilterForm(): FormGroup {
    return this.formService.attendanceFilterForm;
  }

  set attendanceFilterForm(form: FormGroup) {
    this.formService.attendanceFilterForm = form;
  }
  constructor(
    private formService: FormService,
    private store: Store<EmployeeAttendanceRecord>,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formService.initializeForm();
    this.store.dispatch(loadAttendanceList({ payload: {} }))
    this.selectorInitializer();
    this.getDeparmentList();
    this.setMaxDate()
    this.dataSource.paginator = this.paginator;

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator.page.subscribe(() => this.onSubmit());

  }
  getDeparmentList(): void {
    this.store.dispatch(loadDepartments());

  }

  onViewAttendanceDetails(id: string) {
    this.router.navigate(['admin', 'attendance', id])
  }

  applyFilter(event: Event) {
    if (this.dataSource) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
  setMaxDate(): void {
    this.maxDate = new Date();
  }
  onSubmit() {
    const formValue = this.formService.getFormValue();
    const skip = (this.dataSource?.paginator?.pageIndex ?? 0) * (this.dataSource?.paginator?.pageSize ?? 10);
    const take = this.dataSource?.paginator?.pageSize ?? 10;

    const payload: AttendanceRequestPayload = {
      ...formValue,
      skip,
      take
    };

    this.store.dispatch(loadAttendanceList({ payload }));
  }
  selectorInitializer(): void {
    this.records$ = this.store.pipe(select(selectAttendanceRecords));
    this.records$.subscribe((data) => {
      this.dataSource = new MatTableDataSource(data?.data);
    });
    this.loading$ = this.store.pipe(select(selectAttendanceLoading));
    this.error$ = this.store.pipe(select(selectAttendanceError));
    this.departments$ = this.store.select(selectAllDepartments);
  }
  resetFilter(): void {
    this.store.dispatch(loadAttendanceList({ payload: {} }))
    this.attendanceFilterForm.reset()
  }



}
