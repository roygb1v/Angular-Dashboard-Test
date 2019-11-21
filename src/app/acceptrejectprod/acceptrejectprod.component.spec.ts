import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptrejectprodComponent } from './acceptrejectprod.component';

describe('AcceptrejectprodComponent', () => {
  let component: AcceptrejectprodComponent;
  let fixture: ComponentFixture<AcceptrejectprodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptrejectprodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptrejectprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
