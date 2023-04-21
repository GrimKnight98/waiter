import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AlimentosService } from 'src/app/services/alimentos/alimentos.service';
import { CarritoService } from 'src/app/services/carrito/carrito.service';
import { error } from 'console';

@Component({
  selector: 'app-platillo',
  templateUrl: './platillo.page.html',
  styleUrls: ['./platillo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PlatilloPage implements OnInit {

  cantidad :number = 0;
  platillo :any = [];
  extras :any = [];
  seleccionExtra:number = 0;

  constructor(private route : ActivatedRoute,
              private alim : AlimentosService,
              private carrito : CarritoService) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    this.alim.getPlatilloDetails(id).subscribe(
      resp =>{
          this.platillo = resp.items;
          console.log(this.platillo);
      }
    );

    this.alim.getExtrasComida(id).subscribe(
      resp=>{
        this.extras=resp.items;
        console.log(this.extras);
      }
    )

  }
  increment() {
    this.cantidad++;
  }

  decrement() {
    this.cantidad--;
  }

  addCart(comida_id:any){

    var options = {
      headers: {
          'Content-Type': 'application/json'
     }
   };
    var body = {
      "item":comida_id,
      "user_id":localStorage.getItem('session_id'),
      "cantidad":Number(this.cantidad),
      "extra_comida":this.seleccionExtra
    }

    this.carrito.postCarrito(body, options).subscribe(
      (data:any)=>{
        console.log(body);
        console.log(true);


      }, (error:any)=>{
        console.log(error);

      }
    )
  }

  onChange(value:any){
    this.seleccionExtra = value;
  }

}
