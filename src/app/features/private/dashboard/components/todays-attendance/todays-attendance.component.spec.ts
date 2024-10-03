import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysAttendanceComponent } from './todays-attendance.component';

describe('TodaysAttendanceComponent', () => {
  let component: TodaysAttendanceComponent;
  let fixture: ComponentFixture<TodaysAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodaysAttendanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaysAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
