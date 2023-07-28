import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsPageComponent } from './transactions.component';

describe('TransactionsComponent', () => {
  let component: TransactionsPageComponent;
  let fixture: ComponentFixture<TransactionsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionsPageComponent]
    });
    fixture = TestBed.createComponent(TransactionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
