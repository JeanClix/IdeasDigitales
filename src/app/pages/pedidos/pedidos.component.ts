import { Component } from '@angular/core';
import { misConstantes } from '../../utils';
import { PedidosService } from '../../services/pedido/pedidos.service';
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [PageHeaderComponent, RouterLink],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {
  pedidos: any[] = []
  pedidosFiltrados: any[] = [];
  childsPedidio: string[] = ['Código', 'Fecha de pedido', 'Usuario', 'Nombres']
  filasPaginado: number[] = [10, 30, 50, 100]
  tipoBusqueda: string = this.childsPedidio[0];
  pedidoSeleccionado: any = null;

  tamaño: number = 0
  totalPedidos: number = 0
  pagina = 0
  filasPagina = 70
  totalPaginas = 0

  paginas: number[] = []

  rutaServicio = misConstantes.apiWebURL
  constructor(private pedServices: PedidosService) { }
  ngOnInit(): void {
    this.pedServices.getPedidos().subscribe(
      data => {
        this.pedidos = data;
        this.pedidosFiltrados = data
        this.tamaño = this.childsPedidio.length
        this.totalPedidos = this.pedidos.length
        this.totalPaginas = Math.ceil(this.pedidosFiltrados.length / this.filasPagina)
        for (let i = 0; i < this.totalPaginas; i++) {
          this.paginas.push(i);
        }
      }
    )
  }
  setNumFilas = (numFilas: number) =>{
    return numFilas
  }

  cambiarPagina = (numPagina: number) =>{
    this.pagina = numPagina
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



  getTipo(criterio: string) {
    this.tipoBusqueda = criterio;
  }

  buscar = (event: Event) => {
    const textoBuscar = (event.target as HTMLInputElement).value.toLowerCase();
    this.pedidosFiltrados = this.pedidos.filter(fila => {
      const valor = fila[this.mapearCampo(this.tipoBusqueda)];
      return valor && valor.toString().toLowerCase().includes(textoBuscar);
    });
  }

  mapearCampo(tipoBusqueda: string): string {
    switch (tipoBusqueda) {
      case 'Código': return 'idpedido';
      case 'Fecha de pedido': return 'fechapedido';
      case 'Usuario': return 'usuario';
      case 'Nombres': return 'nombres';
      default: return '';
    }
  }

  seleccionarPedido(pedido: any) {
    console.log(pedido)
    this.pedidoSeleccionado = pedido;
  }
}
