import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputClientiComponent } from './input-clienti.component';

describe('InputClientiComponent', () => {
  let component: InputClientiComponent;
  let fixture: ComponentFixture<InputClientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputClientiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputClientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
