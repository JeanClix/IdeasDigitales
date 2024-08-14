import { Injectable } from '@angular/core';
import { misConstantes } from '../../utils';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private url = misConstantes.apiWebURL+'pedidos.php'

  constructor(private http: HttpClient) { }

  getPedidos(): Observable<any>{
    return this.http.get<any>(this.url)
  }
  getPedido(idpedido: string): Observable<any>{
    const urlweb = misConstantes.apiWebURL+'pedidosdetalle.php?idpedido='+idpedido;
    return this.http.get<any>(urlweb)
  }
}
