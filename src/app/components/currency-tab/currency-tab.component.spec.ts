import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyTabComponent } from './currency-tab.component';

describe('CurrencyTabComponent', () => {
  let component: CurrencyTabComponent;
  let fixture: ComponentFixture<CurrencyTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyTabComponent]
    });
    fixture = TestBed.createComponent(CurrencyTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
