import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ImageData, LeaveRequestList } from '../../types/types';
import { Store } from '@ngrx/store';
import { LEAVE_ACCEPT_REJECT } from '../../store/leave-card-approve/leave-card.action';
import { FETCH_IMAGE } from '../../store/profile-image/profile-image.action';
import { Observable, of } from 'rxjs';
import { selectImageData } from '../../store/profile-image/profile-image.selector';
import { ROUTE_CONSTANT } from '@shared/constants/routes.constant';

@Component({
  selector: 'app-leave-approve-card',
  templateUrl: './leave-approve-card.component.html',
  styleUrl: './leave-approve-card.component.scss',
})
export class LeaveApproveCardComponent implements OnInit {
  constructor(
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: LeaveRequestList,
    private store: Store,
    private dialogRef: MatDialogRef<LeaveApproveCardComponent>
  ) {}

  imageData$: Observable<ImageData | null> = of();

  imageData: ImageData = {
    employeeId: 0,
    imageName: '',
    imageDataBase64: '',
  };

  ngOnInit(): void {
    // console.log(this.data);
    this.store.dispatch(FETCH_IMAGE({ id: this.data.employeeId }));
    this.imageData$ = this.store.select(selectImageData);
  }

  approve(id: string | number): void {
    this.store.dispatch(LEAVE_ACCEPT_REJECT({ id, option: 2 }));
    this.router.navigate([`admin/${ROUTE_CONSTANT.leaveConfirmationPage}`]);
    this.resetDialog();
  }
  reject(id: string | number): void {
    this.store.dispatch(LEAVE_ACCEPT_REJECT({ id, option: 1 }));
    this.router.navigate([`admin/${ROUTE_CONSTANT.leaveConfirmationPage}`]);
    this.resetDialog();
  }
  resetDialog(): void {
    this.dialogRef.close(false);
  }
  navigate():void{
    this.router.navigate([`admin/${ROUTE_CONSTANT.leaveManagement}/${this.data.employeeId}`]);
  }
}
