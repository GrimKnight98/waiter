
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Adicionales } from 'src/app/interfaces/adicionales/adicionales';
import { Bebidas } from 'src/app/interfaces/bebidas/bebidas';
import { DetallePlatillo } from 'src/app/interfaces/platillos/detalle-platillo';
import { ExtrasComida } from 'src/app/interfaces/platillos/extras-comida';
import { Platillos } from 'src/app/interfaces/platillos/platillo';

@Injectable({
  providedIn: 'root'
})
export class AlimentosService {

  constructor(private http: HttpClient) { }

  getPlatillos(tipo:any):Observable<Platillos>{
    return this.http.get<Platillos>(`https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/comidaXtipo?tipo=${tipo}`);
  }

  getSnacks(tipo:any):Observable<Platillos>{
      return this.http.get<Platillos>(`https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/comidaXtipo?tipo=${tipo}`)
  }

  getPostres(tipo:any):Observable<Platillos>{
    return this.http.get<Platillos>(`https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/comidaXtipo?tipo=${tipo}`)
}
  getPlatilloDetails(id:any):Observable<DetallePlatillo>{
    return this.http.get<DetallePlatillo>(`https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/getitem?id=${id}`)
  }

  getExtrasComida(id:any):Observable<ExtrasComida>{
    return this.http.get<ExtrasComida>(`https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/extrasComida?comida=${id}`)
  }

  getBebidas():Observable<Bebidas>{
    return this.http.get<Bebidas>('https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/bebidas');
  }
  getBebidasById(id:number){
    return this.http.get(`https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/bebidaById?id=${id}`)
    .pipe(
      map(
        (res: any) => {
          return res.items;
        }
      )
    )
  }

  getAdicionales():Observable<Adicionales>{
    return this.http.get<Adicionales>('https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/adicionales');
  }


}
