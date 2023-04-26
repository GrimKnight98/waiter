import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AlimentosService } from 'src/app/services/alimentos/alimentos.service';
import { CarritoService } from 'src/app/services/carrito/carrito.service';

@Component({
  selector: 'app-bebida',
  templateUrl: './bebida.page.html',
  styleUrls: ['./bebida.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BebidaPage implements OnInit {

  bebidaID :any = 0;
  bebida:any;
  cantidad :number = 0;
  extras :any = [];
  seleccionExtra:number = 0;

  constructor(private route : ActivatedRoute,
              private alimento : AlimentosService,
              private carrito : CarritoService,
              private toastController : ToastController) { }

  ngOnInit() {
    this.bebidaID = this.route.snapshot.paramMap.get('id');
    this.alimento.getBebidasById(this.bebidaID).subscribe(
      res =>{
        this.bebida = res;
      }
    )
  }

  increment() {
    this.cantidad++;
  }

  decrement() {
    if (this.cantidad == 0) {
      console.log("no s epuede decrementar ");
      this.decrementAlert('bottom');


    } else {
      this.cantidad--;
    }

  }

  addCart(comida_id:any){

    if (this.cantidad == 0) {
      this.decrementAlert('bottom');
    } else {
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
          this.orderSuccess('bottom');


        }, (error:any)=>{
          console.log(error);

        }
      )
    }


  }

  onChange(value:any){
    this.seleccionExtra = value;
  }

  async decrementAlert(position: 'top' | 'middle' | 'bottom'){
    const toast = await this.toastController.create({
      message:'No puedes pedir menos de cero o cero',
      duration:1500,
      color:'danger',
      position: position,
      icon:'close-outline'
    });
    await toast.present();
  }

  async orderSuccess(position : 'top'|'middle'|'bottom'){
    const toast = await this.toastController.create({
      message:'Item Seleccionado ...',
      duration: 1500,
      color: 'success',
      position:position,
      icon:'checkmark-outline'
    });
    await toast.present();

  }


}
