import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSlotsComponent } from './search-slots.component';

describe('SearchSlotsComponent', () => {
  let component: SearchSlotsComponent;
  let fixture: ComponentFixture<SearchSlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSlotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
