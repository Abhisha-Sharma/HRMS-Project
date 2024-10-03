import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveConfirmationPageComponent } from './leave-confirmation-page.component';

describe('LeaveConfirmationPageComponent', () => {
  let component: LeaveConfirmationPageComponent;
  let fixture: ComponentFixture<LeaveConfirmationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeaveConfirmationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveConfirmationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
