import { Injectable } from '@angular/core';
import { misConstantes } from '../../utils';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor(private http: HttpClient) { }

  getProductos(idcategoria: string): Observable<any>{
    const url = misConstantes.apiWebURL+'productos.php?idcategoria='+idcategoria;
    return this.http.get<any>(url)
  }

  getProducto(idproducto: string): Observable<any>{
    const url = misConstantes.apiWebURL+'productos.php?idproducto='+idproducto;
    return this.http.get<any>(url)
  }
}
