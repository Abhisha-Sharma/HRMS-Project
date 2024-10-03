import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceCalanderComponent } from './attendance-calander.component';

describe('AttendanceCalanderComponent', () => {
  let component: AttendanceCalanderComponent;
  let fixture: ComponentFixture<AttendanceCalanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttendanceCalanderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AttendanceCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
