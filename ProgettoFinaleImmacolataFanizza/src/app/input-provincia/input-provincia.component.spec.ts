import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputProvinciaComponent } from './input-provincia.component';

describe('InputProvinciaComponent', () => {
  let component: InputProvinciaComponent;
  let fixture: ComponentFixture<InputProvinciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputProvinciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
