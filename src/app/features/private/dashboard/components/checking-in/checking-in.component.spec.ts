import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingInComponent } from './checking-in.component';

describe('CheckingInComponent', () => {
  let component: CheckingInComponent;
  let fixture: ComponentFixture<CheckingInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckingInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckingInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
