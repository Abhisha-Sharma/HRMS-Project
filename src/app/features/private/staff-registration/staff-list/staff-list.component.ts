import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { DialogComponent } from '@shared/components/dialog/dialog.component';
import { DialogData } from '@shared/components/model/dialog.interface';
import { Observable, of } from 'rxjs';
import { StaffList, StaffListForTable } from './model/staff-list';
import { deleteEmployee } from './store/delete-store/delete-staff.actions';
import { loadStaffList } from './store/staff-list.actions';
import {
  selectStaffList,
  selectStaffListError,
  selectStaffListLoading,
} from './store/staff-list.selector';
import { StaffListState } from './store/staff-list.state';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss'],
})
export class StaffListComponent implements OnInit {
  staff$: Observable<StaffList[]> = of([]);
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);
  isSmallScreen: boolean = false;
  dataSource!: MatTableDataSource<StaffList>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  displayedColumns: (keyof StaffListForTable)[] = [
    'SN',
    'id',
    'firstName',
    'lastName',
    'mobileNo',
    'address',
    'nationality',
    'departmentId',
    'role',
    'email',

    'actions',
  ];

  constructor(
    private router: Router,
    private store: Store<StaffListState>,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.selectorInitializer();
    this.store.dispatch(loadStaffList());
    this.isSmallScreen = window.innerWidth <= 480;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.isSmallScreen = window.innerWidth <= 480;
  }

  onEditStaffDetails(id: number): void {
    this.router.navigate(['/admin/staff-registration/edit-staff', id]);
  }
  onViewStaffDetails(id: number | string): void {
    this.router.navigate([`/admin/profile-details`, id]);
  }
  onAddNewEmployee(): void {
    this.router.navigate(['/admin/staff-registration/add-staff']);
  }


  onDeleteStaffDetails(id: number): void {
    const dialogData: DialogData = {
      titleArray: ['Are you sure you want to delete?'],
      buttonArray: [

        {
          label: 'Confirm',
          type: 'mat-primary',
          action: () => {
            this.store.dispatch(deleteEmployee({ id }));
          },
        },
        {
          label: 'Cancel',
          type: 'mat-warn',
          action: () => {
            return;
          },
        },
      ],
    };
    this.dialog.open(DialogComponent, {
      data: dialogData,
    });
  }
  applyFilter(event: Event) {
    if (this.dataSource) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
  selectorInitializer(): void {
    this.staff$ = this.store.pipe(select(selectStaffList));
    this.staff$.subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.loading$ = this.store.pipe(select(selectStaffListLoading));
    this.error$ = this.store.pipe(select(selectStaffListError));
  }
}
