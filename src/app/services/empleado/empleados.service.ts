import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { misConstantes } from '../../utils';
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private url = misConstantes.apiWebURL+'empleados.php';
  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<any>{
    return this.http.get<any>(this.url)
  }
}
