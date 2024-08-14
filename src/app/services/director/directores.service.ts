import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { misConstantes } from '../../utils';

@Injectable({
  providedIn: 'root'
})
export class DirectoresService {


  constructor( private http: HttpClient) { }

  getDirectores(): Observable<any> {
    let rutaServicio = misConstantes.apiWebURL + 'directores.php'
    return this.http.get<any>(rutaServicio)
  }

  insertDirectores(nombres: string, peliculas: string){
    let rutaServicio = misConstantes.apiWebURL + 'directoresinsert.php'

    const formData = new FormData()
    formData.append("nombres", nombres)
    formData.append("peliculas", peliculas)

    return this.http.post<any>(rutaServicio, formData).pipe(
      map( res => {
        return res
      })
    )
  }

  updateDirectores(iddirector: string, nombres: string, peliculas: string){
    let rutaServicio = misConstantes.apiWebURL + 'directoresupdate.php'

    const formData = new FormData()
    formData.append("iddirector", iddirector)
    formData.append("nombres", nombres)
    formData.append("peliculas", peliculas)

    return this.http.post<any>(rutaServicio, formData).pipe(
      map( res => {
        return res
      })
    )
  }

  deleteDirectores(iddirector: string){
    let rutaServicio = misConstantes.apiWebURL + 'directoresdelete.php'

    const formData = new FormData()
    formData.append("iddirector", iddirector)
    return this.http.post<any>(rutaServicio, formData).pipe(
      map( res => {
        return res
      })
    )
  }


}
