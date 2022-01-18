import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionTambahComponent } from './division-tambah.component';

describe('DivisionTambahComponent', () => {
  let component: DivisionTambahComponent;
  let fixture: ComponentFixture<DivisionTambahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionTambahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionTambahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
