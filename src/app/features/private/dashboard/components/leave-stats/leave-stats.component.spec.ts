import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveStatsComponent } from './leave-stats.component';

describe('LeaveStatsComponent', () => {
  let component: LeaveStatsComponent;
  let fixture: ComponentFixture<LeaveStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeaveStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
