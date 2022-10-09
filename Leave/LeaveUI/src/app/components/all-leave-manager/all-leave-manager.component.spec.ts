import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLeaveManagerComponent } from './all-leave-manager.component';

describe('AllLeaveManagerComponent', () => {
  let component: AllLeaveManagerComponent;
  let fixture: ComponentFixture<AllLeaveManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLeaveManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllLeaveManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
