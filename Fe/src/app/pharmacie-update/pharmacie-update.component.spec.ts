import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacieUpdateComponent } from './pharmacie-update.component';

describe('PharmacieUpdateComponent', () => {
  let component: PharmacieUpdateComponent;
  let fixture: ComponentFixture<PharmacieUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacieUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacieUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
