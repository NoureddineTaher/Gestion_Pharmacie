import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacieGardeComponent } from './pharmacie-garde.component';

describe('PharmacieGardeComponent', () => {
  let component: PharmacieGardeComponent;
  let fixture: ComponentFixture<PharmacieGardeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacieGardeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacieGardeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
