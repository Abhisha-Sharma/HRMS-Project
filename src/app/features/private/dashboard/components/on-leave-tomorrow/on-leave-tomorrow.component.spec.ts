import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnLeaveTomorrowComponent } from './on-leave-tomorrow.component';

describe('OnLeaveTomorrowComponent', () => {
  let component: OnLeaveTomorrowComponent;
  let fixture: ComponentFixture<OnLeaveTomorrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnLeaveTomorrowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnLeaveTomorrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
