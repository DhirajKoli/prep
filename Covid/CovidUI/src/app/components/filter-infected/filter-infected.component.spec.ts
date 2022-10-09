import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterInfectedComponent } from './filter-infected.component';

describe('FilterInfectedComponent', () => {
  let component: FilterInfectedComponent;
  let fixture: ComponentFixture<FilterInfectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterInfectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterInfectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
