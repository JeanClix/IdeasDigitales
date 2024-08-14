import { Component } from '@angular/core';
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { misConstantes } from '../../utils';
import { CategoriasService } from '../../services/categoria/categorias.service';
import { ProductosComponent } from "../../components/productos/productos.component";

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [PageHeaderComponent, ProductosComponent],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent {
  categorias: any[] = []
  rutaServicio = misConstantes.apiWebURL
  categoriaSeleccionada: any = {}

  constructor(private catServices: CategoriasService) { }
  ngOnInit(): void {
    this.catServices.getCategorias().subscribe(
      data => {
        this.categorias = data;
        this.seleccionarCategoria(data[0])
      }
    )
  }
  seleccionarCategoria(itemSeleccionado: any) {
      console.log(itemSeleccionado)
      this.categoriaSeleccionada=itemSeleccionado

    }
}
