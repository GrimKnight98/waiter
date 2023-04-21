import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MesasDisponibles } from 'src/app/interfaces/mesas/mesas-disponibles';
import { Mesas } from 'src/app/interfaces/mesas/mesas';

@Injectable({
  providedIn: 'root'
})
export class MesasService {

  constructor(private http : HttpClient) { }

  getMesas():Observable<Mesas>{
    return this.http.get<Mesas>('https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/mesas');
  }

  getMesasDisponibles():Observable<MesasDisponibles>{
    return this.http.get<MesasDisponibles>('https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/mesasDisponibles')
  }
}
