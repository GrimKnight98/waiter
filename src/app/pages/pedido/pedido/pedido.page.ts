import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, LoadingController, ToastController } from '@ionic/angular';
import { CarritoService } from 'src/app/services/carrito/carrito.service';
import { MesasService } from 'src/app/services/mesas/mesas.service';
import { PedidosService } from 'src/app/services/pedidos/pedidos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PedidoPage implements OnInit {

  items:any;
  mesasDisp:any=[];
  login:any;
  tamount: number = 0;
  mesa_id:any;

  constructor(private carrito : CarritoService,
              private alertController : AlertController,
              private loadingCtrl : LoadingController,
              private toastController : ToastController,
              private mesas : MesasService,
              private pedido : PedidosService,
              private router:Router) { }

  ngOnInit() {
    // this.login = localStorage.getItem('session_id');
    // this.getItems();
  }

  ionViewWillEnter(){
    this.login = localStorage.getItem('session_id');
    this.getItems();
    this.getMesas();
  }


  getItems(){
    const id = localStorage.getItem('session_id');
    this.carrito.getCarrito(id).subscribe(
      resp =>{
        this.items=resp.items;
        console.log(this.items);

        for (let index = 0; index < this.items.length; index++) {
          //console.log(this.items[index].total);
          this.tamount += this.items[index].total;
          console.log(this.tamount);

        }
        console.log(this.items.length);


      }
    )
  }
  getMesas(){
      this.mesas.getMesasDisponibles().subscribe(
        resp =>{
          this.mesasDisp = resp.items;
        }
      )
  }


  async limpiarCarrito() {
    const alert = await this.alertController.create({
      header: "Vaciar",
      subHeader: "Vaciar Carrito",
      message: "¿Deseas continuar?",
      buttons: [{
        text: 'Okay',
        handler: () => {
          console.log('entra a alert');
          this.showLoading();
        }
      }, 'Cancel']


    });
    await alert.present();
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Espera...',
    });

    console.log('entra limpiar carrito');

    this.carrito.deleteCarrito().subscribe(
      (res:any)=>{
        this.tamount = 0;
        this.getItems();
        this.presentToast('bottom');
        loading.dismiss();
      },
        (err:any) => {
          console.log(err);
        }
    );

    loading.present();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Listo, Carrito vaciado',
      duration: 1500,
      position: position,
      color: "tertiary"
    });

    await toast.present();
  }

  async presentToastPedido(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Pedido debe tener al menos un Item!',
      duration: 2000,
      position: position,
      color:'danger'
    });

    await toast.present();
  }

  onChange(value:any){
    this.mesa_id = value;
  }

  async crearPedido(){

    console.log("inicia crearPedido, items: ",this.items);

    if (this.items == undefined|| this.items.length===0) {
      console.log("arreglo vaciao ",this.items);
      this.presentToastPedido('top');
    } else {

      const loading = await this.loadingCtrl.create({
        message:"Espere...",
        animated:true
      });
      loading.present();

      var body = {
        "mesero_id":localStorage.getItem('session_id'),
        "MESA":this.mesa_id,
        "total":this.tamount
      }

      var options = {
        headers: {
            'Content-Type': 'application/json'
      }
      }
        console.log("hago pedido");
        this.pedido.postPedidos(body,options).subscribe(
           data =>{
              console.log(true);
              this.carrito.deleteCarrito().subscribe(
                async (res:any)=>{
                  this.tamount = 0;
                  this.getItems();
                  loading.dismiss();
                  const toast = await this.toastController.create({
                    message:"Pedido Enviado con exito...",
                    duration:1500,
                    color:'success',
                    position:'top',
                    icon:'checkmark-outline'
                  });
                  toast.present();

                },
                  (err:any) => {
                    console.log(err);
                  }
              );


          }, error=>{
            console.log(error);
            loading.dismiss();
          }
        )

        this.router.navigate(['pedido']);

    }
  }


}
