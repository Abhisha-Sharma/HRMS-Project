import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LeaveConfirmationService } from '../../services/leave-confirmation/leave-confirmation.service';
import { LeaveRequestList } from '../../types/leave-table';
import { Store } from '@ngrx/store';
import { selectLeaveRequestList } from '../../store/leave-confirmation/leave-confirmation.selector';
import { Observable, of } from 'rxjs';
import { FETCH_LEAVE_REQUEST_lIST } from '../../store/leave-confirmation/leave-confirmation.actions';

@Component({
  selector: 'app-leave-approve-reject',
  templateUrl: './leave-approve-reject.component.html',
  styleUrl: './leave-approve-reject.component.scss'
})
export class LeaveApproveRejectComponent implements OnInit{
  constructor(private  http: HttpClient, private leaveRequestList: LeaveConfirmationService, private store: Store) { }
  
  requestList$ : Observable<LeaveRequestList[]> = of([]);

  ngOnInit(): void {
      this.initializeStore()
  }

  initializeStore(){
    this.store.dispatch(FETCH_LEAVE_REQUEST_lIST());
    this.requestList$ =  this.store.select(selectLeaveRequestList)
  }
  
}
