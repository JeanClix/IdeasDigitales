import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/producto/productos.service';
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { CommonModule } from '@angular/common';
import { misConstantes, misMetodos } from '../../utils';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [PageHeaderComponent, CommonModule],
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.css'
})
export class ProductoDetalleComponent {
  noFoto: String = "noFoto.jpg"
  productoDetalle: any[] = []
  rutaServicio = misConstantes.apiWebURL
  cantidad=1
  constructor(
    private activatedRoute: ActivatedRoute,
    private prodServices: ProductosService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        console.log(params)
        this.leerProductoDetalle(params["idproducto"])
      }
    )
  }

  leerProductoDetalle(idproducto: any) {
    console.log(idproducto);
    this.prodServices.getProducto(idproducto).subscribe(
      data => {
        console.log(data)
        this.productoDetalle = data;
      }
    )
  }

  actualizarCantidad = (event: any) => {
    this.cantidad = event.target.value

  }
  agregarCarrito(productoSeleccionado: any) {
    console.log(productoSeleccionado);
    misMetodos.agregarCarrito(productoSeleccionado, this.cantidad)
  }
}
