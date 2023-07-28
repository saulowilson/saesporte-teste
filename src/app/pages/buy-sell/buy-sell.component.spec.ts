import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySellPageComponent } from './buy-sell.component';

describe('BuySellComponent', () => {
  let component: BuySellPageComponent;
  let fixture: ComponentFixture<BuySellPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuySellPageComponent]
    });
    fixture = TestBed.createComponent(BuySellPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
