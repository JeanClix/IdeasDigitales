import { Component, numberAttribute } from '@angular/core';
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { ProveedoresService } from '../../services/proveedor/proveedores.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [PageHeaderComponent, CommonModule],
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css'
})
export class ProveedoresComponent {
  proveedores: any[] = []
  proveedoresFiltrados: any[] = []
  proveedorDetalle: any = null
  pagina = 0
  filasPagina = 5
  totalPaginas = 0

  paginas: number[] = []
  constructor(private proveedoresService: ProveedoresService) {

  }

  ngOnInit(): void {
    this.proveedoresService.getProveedores().subscribe(
      data => {
        this.proveedores = data
        this.proveedoresFiltrados = data
        this.totalPaginas = Math.ceil(this.proveedoresFiltrados.length / this.filasPagina)
        for (let i = 0; i < this.totalPaginas; i++) {
          this.paginas.push(i);
        }
      }
    )
  }
  verDetalle = (proveedor: any) => {
    console.log(proveedor)
    this.proveedorDetalle = proveedor
    console.log(this.proveedorDetalle)
  }

  buscar = (event: any) => {
    console.log(event.target.value)
    let textoBuscar = event.target.value
    this.proveedoresFiltrados = this.proveedores.filter(fila =>
      fila["nombreempresa"].toUpperCase().includes(textoBuscar.toUpperCase()) ||
      fila["nombrecontacto"].toUpperCase().includes(textoBuscar.toUpperCase()) ||
      fila["cargocontacto"].toUpperCase().includes(textoBuscar.toUpperCase()) ||
      fila["ciudad"].toUpperCase().includes(textoBuscar.toUpperCase())
    )
  }

  retroceder = () => {
    if (this.pagina > 0) {
      this.pagina--
      console.log(this.pagina)
    }
  }
  avanzar = () => {
    if (this.pagina < this.totalPaginas - 1) {
      this.pagina++
      console.log(this.pagina)
    }
  }

  cambiarPagina = (numPagina: number) => {
    this.pagina = numPagina
  }





}
