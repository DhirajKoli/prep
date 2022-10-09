import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInfectedComponent } from './all-infected.component';

describe('AllInfectedComponent', () => {
  let component: AllInfectedComponent;
  let fixture: ComponentFixture<AllInfectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllInfectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllInfectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
