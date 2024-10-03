import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveApproveCardComponent } from './leave-approve-card.component';

describe('LeaveApproveCardComponent', () => {
  let component: LeaveApproveCardComponent;
  let fixture: ComponentFixture<LeaveApproveCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeaveApproveCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveApproveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
