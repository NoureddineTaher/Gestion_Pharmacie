import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacieGardeListComponent } from './pharmacie-garde-list.component';

describe('PharmacieGardeListComponent', () => {
  let component: PharmacieGardeListComponent;
  let fixture: ComponentFixture<PharmacieGardeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacieGardeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacieGardeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
