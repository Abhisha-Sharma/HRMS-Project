import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { submitLeaveForm } from './store/leave-apply-submit/leave.actions';
import { filter, Subject, takeUntil } from 'rxjs';
import { LeaveFormService } from './services/form/leave-form.service';
import { GET_EDIT_LEAVE_DATA } from './store/leave-apply-form/leave-edit.action';
import { DayLeaveDropdown } from '@shared/store/day-leave-dropdown/day-leave.state';
import { FETCH_DAY_LEAVE_DROPDOWN } from '@shared/store/day-leave-dropdown/day-leave.actions';
import {
  DayLeaveDropDownData,
  DayLeaveDropDownLoading,
} from '@shared/store/day-leave-dropdown/day-leave.selectors';

import { loggedInUser } from '@shared/constants/global.constants';
import { DAY_DATA, formatDate, formatDateToString } from '@shared/utils/date-utils';
import { selectLeaveEditData } from './store/leave-apply-form/leave-edit.selector';
import { LeaveTypeDropdown } from '@shared/store/add-staff-dropdowns/leave-type-dropdown/leave-type.state';
import { LeaveTypeDropDownData } from '@shared/store/add-staff-dropdowns/leave-type-dropdown/leave-type.selector';
import { FETCH_LEAVE_TYPE_DROPDOWN } from '@shared/store/add-staff-dropdowns/leave-type-dropdown/leave-type.action';

@Component({
  selector: 'app-leave-apply',
  templateUrl: './leave-apply.component.html',
  styleUrl: './leave-apply.component.scss',
})
export class LeaveApplyComponent implements OnInit, OnDestroy {
  leaveId: string | number | null = null;

  minDate: Date = new Date();
  minDateForLeaveTo: Date = new Date();

  departments: string[] = ['Angular', '.NET'];
  leaveTypeArray: LeaveTypeDropdown[] = [];
  loadingLeaveType: boolean = false;
  dayLeaveTypeArray: DayLeaveDropdown[] = [];
  loadingDayLeave: boolean = false;

  #destroy$: Subject<void> = new Subject<void>();

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private leaveEditService: LeaveFormService,
    private leaveFormService: LeaveFormService
  ) {}

  get leaveApplyForm(): FormGroup | undefined {
    return this.leaveFormService.form;
  }

  get editId(): string | undefined {
    return this.route.snapshot.params[' id'];
  }

  get isEditMode(): boolean {
    return this.leaveFormService.getEditMode();
  }

  ngOnInit(): void {
    this.#buildForm();
    this.loadEditData(this.editId);
    this.getDropDown();
  }

  ngOnDestroy(): void {
    this.#destroy$.next();
    this.#destroy$.complete();
    this.resetForm();
    this.leaveFormService.resetEditMode();
  }

  getDropDown() :void{
    // console.log(this.leaveApplyForm?.value);
    this.store.dispatch(FETCH_DAY_LEAVE_DROPDOWN());

    this.store
      .select(DayLeaveDropDownData)
      .pipe(takeUntil(this.#destroy$))
      .subscribe((dayLeaveDropDown) => {
        this.dayLeaveTypeArray = dayLeaveDropDown;
      });

    this.store.dispatch(FETCH_LEAVE_TYPE_DROPDOWN());

    this.store
      .select(LeaveTypeDropDownData)
      .pipe(takeUntil(this.#destroy$))
      .subscribe((leaveTypeDropDown) => {
        this.leaveTypeArray = leaveTypeDropDown;
      });
  }

  onSubmit(): void {
    if (this.leaveApplyForm?.invalid) {
      return;
    }
    const formValue = this.leaveApplyForm?.value;

    const selectedDayLeave = this.dayLeaveTypeArray.find(
      (item) => item.value === formValue.dayLeave.value
    )?.key;
    const selectedLeaveType = this.leaveTypeArray.find(
      (item) => item.value === formValue.leaveType.value
    )?.key;
    const formattedLeaveFrom = formatDateToString(formValue.leaveFrom);
    
    // console.log(formValue.leaveFrom)
    // console.log(formattedLeaveFrom)
    const formattedLeaveTo = formatDateToString(formValue.leaveTo);

    const formValueSubmit = {
      employeeId: Number(loggedInUser.id),
      leaveFrom: formattedLeaveFrom,
      leaveTo: formattedLeaveTo,
      leaveType: selectedLeaveType ?? 0,
      dayLeave: selectedDayLeave ?? 0,
      reasonForLeave: formValue.reasonForLeave,
      leaveRequestStatus: 3,
    };

    if (this.isEditMode && this.leaveId !== null) {
      this.store.dispatch(GET_EDIT_LEAVE_DATA({ id: String(this.leaveId) }));
    } else {
      this.store.dispatch(submitLeaveForm({ leaveData: formValueSubmit }));
    }

    this.router.navigate(['/admin/leave-management']);
  }

  private loadEditData(leaveId?: string): void {
    // console.log(leaveId);
    if (!leaveId) {
      return;
    }

    this.store.dispatch(GET_EDIT_LEAVE_DATA({ id: leaveId }));

    this.store
      .select(selectLeaveEditData)
      .pipe(
        filter((data) => !!data),
        takeUntil(this.#destroy$)
      )
      .subscribe((editLeaveData) => {
        if (this.leaveApplyForm && editLeaveData) {
          this.leaveEditService.patchData(this.leaveApplyForm, editLeaveData);
          // console.log(editLeaveData);
          // console.log(editLeaveData.reasonForLeave);
          // console.log(this.leaveApplyForm);
        }
      });

    // this.leaveEditService
    //   .fetchEditLeaveData(leaveId)
    //   .pipe(
    //     filter((data) => !!data),
    //     takeUntil(this.#destroy$)
    //   )
    //   .subscribe((response) => {
    //     if (this.leaveApplyForm) {
    //       this.leaveEditService.patchData(this.leaveApplyForm, response.data);
    //       console.log(response)
    //       console.log(response.data.reasonForLeave);
    //       console.log(this.leaveApplyForm?.value)
    //     }
    //   });
  }

  resetForm() :void{
    this.leaveApplyForm?.reset();
  }

  #buildForm(): void {
    this.leaveEditService.buildForm();
    this.leaveApplyForm
      ?.get('leaveFrom')
      ?.valueChanges.pipe(takeUntil(this.#destroy$))
      .subscribe((leaveFromDate) => {
        if (leaveFromDate) {
          const adjustedDate = new Date(leaveFromDate);
          adjustedDate.setHours(0,0,0,0);
          this.minDateForLeaveTo = adjustedDate;
          this.leaveApplyForm?.get('leaveTo')?.updateValueAndValidity();
        }
      });
  }
}
