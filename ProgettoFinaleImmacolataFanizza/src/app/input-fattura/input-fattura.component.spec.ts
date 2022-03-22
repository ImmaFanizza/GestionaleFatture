import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFatturaComponent } from './input-fattura.component';

describe('InputFatturaComponent', () => {
  let component: InputFatturaComponent;
  let fixture: ComponentFixture<InputFatturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFatturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFatturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
