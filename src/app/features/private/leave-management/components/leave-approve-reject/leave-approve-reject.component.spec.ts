import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveApproveRejectComponent } from './leave-approve-reject.component';

describe('LeaveApproveRejectComponent', () => {
  let component: LeaveApproveRejectComponent;
  let fixture: ComponentFixture<LeaveApproveRejectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeaveApproveRejectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveApproveRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
