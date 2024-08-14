import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { misConstantes, misMetodos } from '../../utils';
import { ProductosService } from '../../services/producto/productos.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {


  @Input() idcategoria: string = ""
  noFoto: String = "noFoto.jpg"
  constructor(private prodServices: ProductosService) { }

  productos: any[] = []
  productoDetalle: any[] = []
  rutaServicio = misConstantes.apiWebURL

  ngOnChanges(): void {
    this.prodServices.getProductos(this.idcategoria).subscribe(
      data => {
        this.productos = data;

      }
    )
  }
  mostrarVistaRapida(idproducto: any) {
    console.log(idproducto);
    this.prodServices.getProducto(idproducto).subscribe(
      data => {
        console.log(data)
        this.productoDetalle = data;
      }
    )
  }
  agregarCarrito(productoSeleccionado: any) {
    console.log(productoSeleccionado);
    misMetodos.agregarCarrito(productoSeleccionado, 1)
  }

}
