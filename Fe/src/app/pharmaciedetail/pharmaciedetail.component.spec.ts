import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaciedetailComponent } from './pharmaciedetail.component';

describe('PharmaciedetailComponent', () => {
  let component: PharmaciedetailComponent;
  let fixture: ComponentFixture<PharmaciedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmaciedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaciedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
