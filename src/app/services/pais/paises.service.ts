import { Injectable } from '@angular/core';
import { misConstantes } from '../../utils';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private url = misConstantes.apiWebURL+'paises.php';
  constructor(private http: HttpClient) { }

  getPaises(): Observable<any>{
    return this.http.get<any>(this.url)
  }

  insertPais(codpais: string, pais: string, capital: string, area:string, poblacion: string, continente: string){
    let rutaServicio = misConstantes.apiWebURL + 'paisesinsert.php'

    const formData = new FormData()
    formData.append("codpais", codpais)
    formData.append("pais", pais)
    formData.append("capital", capital)
    formData.append("area", area)
    formData.append("poblacion", poblacion)
    formData.append("continente", continente)

    return this.http.post<any>(rutaServicio, formData).pipe(
      map( res => {
        console.log(res)
        return res
      })
    )
  }

  // updatePais(idpais: string, pais: string, capital: string){
  //   let rutaServicio = misConstantes.apiWebURL + 'directoresupdate.php'

  //   const formData = new FormData()
  //   formData.append("idpais", idpais)
  //   formData.append("pais", pais)
  //   formData.append("capital", capital)

  //   return this.http.post<any>(rutaServicio, formData).pipe(
  //     map( res => {
  //       return res
  //     })
  //   )
  // }

  // deleteDirectores(idpais: string){
  //   let rutaServicio = misConstantes.apiWebURL + 'directoresdelete.php'

  //   const formData = new FormData()
  //   formData.append("idpais", idpais)
  //   return this.http.post<any>(rutaServicio, formData).pipe(
  //     map( res => {
  //       return res
  //     })
  //   )
  // }
}
