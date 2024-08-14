import { Component } from '@angular/core';
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [PageHeaderComponent, CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

  itemsCarrito: any[] = []
  total = 0

  ngOnInit(): void {
    let carritoStorage = sessionStorage.getItem("carritocompras") as string
    this.itemsCarrito = JSON.parse(carritoStorage)
    this.calcularTotal()
  }

  vaciarCarrito() {
    this.itemsCarrito = []
    sessionStorage.removeItem("carritocompras")
    this.total = 0
  }

  calcularTotal = () => {
    this.total = this.itemsCarrito.reduce((acumulador, fila) => acumulador + fila["precio"] * fila["cantidad"], 0)
  }

  eliminarItem(itemCarrito: any) {
    let carritoMenos = this.itemsCarrito.filter(item => item.idproducto !== itemCarrito.idproducto)
    this.itemsCarrito = carritoMenos
    sessionStorage.setItem("carritocompras", JSON.stringify(carritoMenos))
    this.calcularTotal()
  }

  actualizarCantidad = (event: any, indice: number) => {
    console.log(indice)
    this.itemsCarrito[indice].cantidad = event.target.value
    sessionStorage.setItem("carritoCompras", JSON.stringify(this.itemsCarrito))
    this.calcularTotal()
  }
}
