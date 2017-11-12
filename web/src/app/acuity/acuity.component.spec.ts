import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuityComponent } from './acuity.component';

describe('AcuityComponent', () => {
  let component: AcuityComponent;
  let fixture: ComponentFixture<AcuityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcuityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcuityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
