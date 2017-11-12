import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualFieldComponent } from './visual-field.component';

describe('VisualFieldComponent', () => {
  let component: VisualFieldComponent;
  let fixture: ComponentFixture<VisualFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
