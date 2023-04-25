import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResumenPedidos } from '../../interfaces/dashboard_mesero/resumen-pedidos';

@Injectable({
  providedIn: 'root'
})
export class ResumenPedidoService {

  constructor(private http: HttpClient) { }

  getResumen():Observable<ResumenPedidos>{
    var id = localStorage.getItem('session_id');
    return this.http.get<ResumenPedidos>(`https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/dashboard_mesero?session_id=${id}`);
  }
}
