import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowConfirmationComponent } from './borrow-confirmation.component';

describe('BorrowConfirmationComponent', () => {
  let component: BorrowConfirmationComponent;
  let fixture: ComponentFixture<BorrowConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
