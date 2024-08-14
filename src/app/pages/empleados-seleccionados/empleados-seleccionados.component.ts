import { Component } from '@angular/core';
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { misConstantes } from '../../utils';

@Component({
  selector: 'app-empleados-seleccionados',
  standalone: true,
  imports: [PageHeaderComponent],
  templateUrl: './empleados-seleccionados.component.html',
  styleUrl: './empleados-seleccionados.component.css'
})
export class EmpleadosSeleccionadosComponent {
  empleadosSeleccionados: any[] = [];
  rutaServicio = misConstantes.apiWebURL;
  seleccionados:number =0

  constructor() {}

  ngOnInit(): void {
    this.cargarEmpleadosSeleccionados();
    this.seleccionados=this.empleadosSeleccionados.length
  }

  cargarEmpleadosSeleccionados(): void {
    const seleccionados = sessionStorage.getItem('empleadosSeleccionados');
    if (seleccionados) {
      this.empleadosSeleccionados = JSON.parse(seleccionados);
    }
  }
}
