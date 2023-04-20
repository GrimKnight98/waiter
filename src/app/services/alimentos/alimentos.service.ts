
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
