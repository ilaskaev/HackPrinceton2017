import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StereopsisComponent } from './stereopsis.component';

describe('StereopsisComponent', () => {
  let component: StereopsisComponent;
  let fixture: ComponentFixture<StereopsisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StereopsisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StereopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
