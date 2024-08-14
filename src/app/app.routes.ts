import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { DirectoresComponent } from './pages/directores/directores.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { PedidoDetalleComponent } from './pages/pedido-detalle/pedido-detalle.component';
import { EmpleadosSeleccionadosComponent } from './pages/empleados-seleccionados/empleados-seleccionados.component';
import { PaisesComponent } from './pages/paises/paises.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'proveedores', component: ProveedoresComponent},
    { path: 'empleados', component: EmpleadosComponent},
    { path: 'tienda', component: TiendaComponent},
    { path: 'productodetalle/:idproducto', component: ProductoDetalleComponent},
    { path: 'carrito', component: CarritoComponent},
    { path: 'directores', component: DirectoresComponent},
    { path: 'pedidos', component: PedidosComponent},
    { path: 'pedidosdetalle/:idpedido', component: PedidoDetalleComponent},
    { path: 'empleados-seleccionados', component: EmpleadosSeleccionadosComponent},
    { path: 'paises', component: PaisesComponent}
];
