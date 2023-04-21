import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrito } from 'src/app/interfaces/carrito/carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http : HttpClient) { }

  getCarrito(id:any):Observable<Carrito>{
    return this.http.get<Carrito>(`https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/carrito?user_id=${id}`);
  }

  postCarrito(body:any, options:any){
      return this.http.post('https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/carrito', body, options);
  }

  deleteCarrito(){
    const user_id = localStorage.getItem('session_id');
    return this.http.delete(`https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/carrito?usuario=${user_id}`);
  }
}
