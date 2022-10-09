import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLeaveEmployeeComponent } from './all-leave-employee.component';

describe('AllLeaveEmployeeComponent', () => {
  let component: AllLeaveEmployeeComponent;
  let fixture: ComponentFixture<AllLeaveEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLeaveEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllLeaveEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
