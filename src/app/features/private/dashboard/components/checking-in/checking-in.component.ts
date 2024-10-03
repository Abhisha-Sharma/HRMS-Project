import { DAY_DATA } from './../../../../../shared/utils/date-utils';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FETCH_PROFILE_DETAILS_ACTION } from './../../../profile-details/store/profile-details.action';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CheckingInDialogComponent } from '../checking-in-dialog/checking-in-dialog.component';
import { Observable, of } from 'rxjs';
import { CheckedInStatusState } from '../../store/checkin-in/checkin-in.state';
import { select, Store } from '@ngrx/store';
import { selectCheckCheckedInStatusData } from '../../store/checkin-in/checkin-in.selector';
import { ProfileDetailsState } from '../../../profile-details/store/profile-details.state';
import { ProfileDetails } from '../../../profile-details/models/profile-details';

import { selectProfileDetails } from '../../../profile-details/store/profile-details.selector';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { FETCH_CHECKED_IN_STATUS } from '../../store/checkin-in/checkin-in.actions';
import { loadAttendanceListById } from '../../../attendance/attendance-by-id/store/attendance-details-by-id.actions';
import {
  EmployeeAttendanceRecordById,
  EmployeeByIdData,
} from '../../../attendance/model/attendance-details.interface';
import { selectAttendanceByIdRecords } from '../../../attendance/attendance-by-id/store/attendance-details-by-id.selector';
@Component({
  selector: 'app-checking-in',
  templateUrl: './checking-in.component.html',
  styleUrl: './checking-in.component.scss',
})
export class CheckingInComponent {
  isCheckedIn: boolean = false;
  checkedInStatus$: Observable<boolean> = of(false);
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);
  profileDetails$: Observable<ProfileDetails | null> = of(null);
  loggedInUserId: string | null = localStorage.getItem('employeeId');
  attendanceData$: Observable<EmployeeByIdData | undefined> = of(undefined);
  attendanceData: EmployeeAttendanceRecordById[] = [];
  buttonDisabled: boolean = false;
  constructor(
    private dialog: MatDialog,
    private store: Store<CheckedInStatusState>,
    private profileStore: Store<ProfileDetailsState>,
    private snackBar: MatSnackBar,
    private attendanceStore: Store
  ) {}

  ngOnInit(): void {
    this.selectorInitializer();
    this.selectorAttendanceInitializer();
  }

  selectorAttendanceInitializer(): void {
    this.attendanceStore.dispatch(
      loadAttendanceListById({
        payload: {
          employeeId: this.loggedInUserId,
          startDate: DAY_DATA.getToday,
          endDate: DAY_DATA.getToday,
          sort: { sortBy: 'Asc' },
        },
      })
    );
    this.attendanceData$ = this.attendanceStore.pipe(
      select(selectAttendanceByIdRecords)
    );
    this.attendanceData$.subscribe((data) => {
      console.log(this.attendanceData);

      this.attendanceData = data?.data ?? [];
    });
    this.updateButton();
  }

  selectorInitializer(): void {
    this.store.dispatch(FETCH_CHECKED_IN_STATUS());
    this.checkedInStatus$ = this.store.select(selectCheckCheckedInStatusData);
    this.profileStore.dispatch(
      FETCH_PROFILE_DETAILS_ACTION({ profileId: this.loggedInUserId ?? '' })
    );
    this.profileDetails$ = this.profileStore.select(selectProfileDetails);
    // this.profileDetails$.subscribe((data) => console.log(data));
    this.checkedInStatus$.subscribe((data) => {
      this.isCheckedIn = data;
      // console.log('are you checkedIn: ', data);
    });
  }

  openCheckInDialog(): void {
    const dialogRef = this.dialog.open(CheckingInDialogComponent, {
      width: '600px',
      data: { isCheckedIn: this.isCheckedIn },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // console.log(result);
      } else {
        this.selectorAttendanceInitializer();
      }
    });
  }

  updateButton(): boolean {
    console.log(this.buttonDisabled);

    if (this.attendanceData.length === 0) {
      return (this.buttonDisabled = false);
    } else if (this.attendanceData[0].checkOut === null) {
      return (this.buttonDisabled = false);
    } else return (this.buttonDisabled = true);
  }
}
