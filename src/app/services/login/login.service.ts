import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  login(body:any, options:any){
    return this.http.put('https://apex.oracle.com/pls/apex/wksp_testcurso1998/comidas/login', body, options).pipe(
      map(
        (res:any)=>{
          return res;
        }
      )
    )
  }
}
