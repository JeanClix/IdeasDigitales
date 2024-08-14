import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosSeleccionadosComponent } from './empleados-seleccionados.component';

describe('EmpleadosSeleccionadosComponent', () => {
  let component: EmpleadosSeleccionadosComponent;
  let fixture: ComponentFixture<EmpleadosSeleccionadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadosSeleccionadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosSeleccionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
