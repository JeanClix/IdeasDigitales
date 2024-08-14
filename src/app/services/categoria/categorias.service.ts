import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { misConstantes } from '../../utils';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private url = misConstantes.apiWebURL+'categorias.php';
  constructor(private http: HttpClient) { }

  getCategorias(): Observable<any>{
    return this.http.get<any>(this.url)
  }
}
