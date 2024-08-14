import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { misConstantes } from '../../utils';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  private url = misConstantes.apiWebURL+'proveedores.php';
  constructor(private http: HttpClient) { }

  getProveedores(): Observable<any>{
    return this.http.get<any>(this.url)
  }
  getProveedor(idproveedor: string): Observable<any>{
    const url = misConstantes.apiWebURL+'proveedores.php?idproveedor='+idproveedor;
    return this.http.get<any>(url)
  }
}
