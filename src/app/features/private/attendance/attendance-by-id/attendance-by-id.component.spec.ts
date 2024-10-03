import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceByIdComponent } from './attendance-by-id.component';

describe('AttendanceByIdComponent', () => {
  let component: AttendanceByIdComponent;
  let fixture: ComponentFixture<AttendanceByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttendanceByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
