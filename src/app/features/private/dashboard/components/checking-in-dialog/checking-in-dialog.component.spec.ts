import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingInDialogComponent } from './checking-in-dialog.component';

describe('CheckingInDialogComponent', () => {
  let component: CheckingInDialogComponent;
  let fixture: ComponentFixture<CheckingInDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckingInDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckingInDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
