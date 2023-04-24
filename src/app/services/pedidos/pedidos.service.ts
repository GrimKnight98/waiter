import { ResumenPedidos } from './../../interfaces/dashboard_mesero/resumen-pedidos';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(
    private http : HttpClient
  ) { }

    postPedidos(body:any, options:any){
      return this.http.post('https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/pedido', body, options)
    }

    resumenPedidos():Observable<ResumenPedidos>{
        return this.http.get<ResumenPedidos>('https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/dashboard_mesero');
    }

}
