import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangePageComponent } from './exchange.component';

describe('ExchangeComponent', () => {
  let component: ExchangePageComponent;
  let fixture: ComponentFixture<ExchangePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExchangePageComponent]
    });
    fixture = TestBed.createComponent(ExchangePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
