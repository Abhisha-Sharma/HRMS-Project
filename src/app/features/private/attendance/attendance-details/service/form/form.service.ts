import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormValue } from '../../../model/attendance-details.interface';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  attendanceFilterForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  initializeForm(): void {
    this.attendanceFilterForm = this.fb.group(
      {
        departmentId: [0],
        employeeId: [0],
        workLocation: [0],
        startDate: [null],
        endDate: [null],
      }
    );
  }
  getFormValue(): FormValue {
    return {
      ...(this.attendanceFilterForm.value),
      endDate: this.formatDateToYYYYMMDD(this.attendanceFilterForm.value.endDate),
      startDate: this.formatDateToYYYYMMDD(this.attendanceFilterForm.value.startDate),
    }
  }

  formatDateToYYYYMMDD(dateStr: string): string {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  }
}
