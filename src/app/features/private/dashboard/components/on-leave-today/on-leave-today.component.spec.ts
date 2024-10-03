import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnLeaveTodayComponent } from './on-leave-today.component';

describe('OnLeaveTodayComponent', () => {
  let component: OnLeaveTodayComponent;
  let fixture: ComponentFixture<OnLeaveTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnLeaveTodayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnLeaveTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
