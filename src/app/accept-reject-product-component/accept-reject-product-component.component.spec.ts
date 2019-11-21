import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptRejectProductComponentComponent } from './accept-reject-product-component.component';

describe('AcceptRejectProductComponentComponent', () => {
  let component: AcceptRejectProductComponentComponent;
  let fixture: ComponentFixture<AcceptRejectProductComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptRejectProductComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptRejectProductComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
