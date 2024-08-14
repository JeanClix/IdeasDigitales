import { Component } from '@angular/core';
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { CommonModule } from '@angular/common';
import { misConstantes } from '../../utils';
import { ActivatedRoute } from '@angular/router';
import { PedidosService } from '../../services/pedido/pedidos.service';

@Component({
  selector: 'app-pedido-detalle',
  standalone: true,
  imports: [PageHeaderComponent, CommonModule],
  templateUrl: './pedido-detalle.component.html',
  styleUrl: './pedido-detalle.component.css'
})
export class PedidoDetalleComponent {
  noFoto: String = "noFoto.jpg"
  pedidoDetalle: any[] = [];
  cantidad: number = 0
  rutaServicio = misConstantes.apiWebURL
  idPedido: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private pedServices: PedidosService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        console.log(params)
        this.idPedido = params['idpedido'];
        this.leerPedidoDetalle(params["idpedido"])
      }
    )
  }

  leerPedidoDetalle(idpedido: any) {
    console.log(idpedido);
    this.pedServices.getPedido(idpedido).subscribe(
      data => {
        console.log(data)
        this.pedidoDetalle= data;
        this.cantidad=this.pedidoDetalle.length
      }
    )
  }

}
