import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsPageComponent } from './tools.component';

describe('ToolsComponent', () => {
  let component: ToolsPageComponent;
  let fixture: ComponentFixture<ToolsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolsPageComponent]
    });
    fixture = TestBed.createComponent(ToolsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
