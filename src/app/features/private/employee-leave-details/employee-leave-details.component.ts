import { Component } from '@angular/core';
import { ILeaveDetailsData } from './types/types';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee-leave-details',
  templateUrl: './employee-leave-details.component.html',
  styleUrl: './employee-leave-details.component.scss'
})
export class EmployeeLeaveDetailsComponent {

  dataSource = new MatTableDataSource<ILeaveDetailsData>();

  displayedColumns: string[] = [
    'id',
    'employeeName',
    'phoneNumber',
    'leaveFrom',
    'leaveTo',
    'reasonForLeave',
    'leaveType',
    'totalLeaveDuration',
    'leaveRequestStatus',
  ];
  
  constructor(){}



  applyFilter(event: Event):void {
    if (this.dataSource) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
}
