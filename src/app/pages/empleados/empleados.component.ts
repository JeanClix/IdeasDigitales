import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { EmpleadosService } from '../../services/empleado/empleados.service';
import { misConstantes } from '../../utils';
import { Router } from '@angular/router';
@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [PageHeaderComponent, CommonModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent implements OnInit {
  empleados: any[] = []
  empleadosSeleccionados: Set<number> = new Set()
  rutaServicio = misConstantes.apiWebURL
  constructor(private empServices: EmpleadosService,
        private router: Router
  ) { }
  ngOnInit(): void {
    this.empServices.getEmpleados().subscribe(
      data => {
        this.empleados = data;
        this.cargarSeleccionados();
      }
    )
  }

  estaSeleccionado(empleado: any): boolean {
    return this.empleadosSeleccionados.has(empleado.idempleado);
  }

  cargarSeleccionados(): void {
    const seleccionados = sessionStorage.getItem('empleadosSeleccionados');
    if (seleccionados) {
      const empleadosSeleccionadosArray = JSON.parse(seleccionados);
      this.empleadosSeleccionados = new Set(empleadosSeleccionadosArray.map((e: any) => e.idempleado));
    }
  }

  seleccionarEmpleado(empleado: any): void {
    console.log(empleado.idempleado);
    let empleadosSeleccionados: any[] = [];

    if (sessionStorage.getItem('empleadosSeleccionados')) {
      empleadosSeleccionados = JSON.parse(sessionStorage.getItem('empleadosSeleccionados') || '[]');
    }
    const index = empleadosSeleccionados.findIndex(e => e.idempleado === empleado.idempleado);

    // let index = -1;
    // for (let i = 0; i < empleadosSeleccionados.length; i++) {
    //   if (empleadosSeleccionados[i].idempleado === empleado.idempleado) {
    //     index = i;
    //     break;
    //   }
    // }

    if (index === -1) {
      empleadosSeleccionados.push(empleado);
    } else {
      empleadosSeleccionados.splice(index, 1);
    }

    sessionStorage.setItem('empleadosSeleccionados', JSON.stringify(empleadosSeleccionados));
    console.log(empleadosSeleccionados);
  }
}
