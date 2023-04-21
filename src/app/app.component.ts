import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AlertController, IonicModule, LoadingController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent implements OnInit{

  login :any;
  public appPages = [
    { title:'Inicio', url:'home', icon:'home' } ,
    { title: 'Platillos', url: 'platillos', icon: 'restaurant' },
    { title: 'Snacks', url: 'snacks', icon: 'fast-food' },
    { title: 'Postres', url: 'postres', icon: 'nutrition' },
    { title: 'Bebidas', url: 'bebidas', icon: 'beer' },
    { title: 'Adicionales', url: 'adicionales', icon: 'add-circle' },
    { title: 'Pedido', url: 'pedido', icon: 'newspaper' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
              private alertCtrl : AlertController,
              private loadingCtrl:LoadingController,
              private toastCtrl: ToastController,
              private router : Router
  ) {}
  ngOnInit() {
    console.log("mENU oninit");
    this.login = localStorage.getItem('session_id');
  }

  getSessionId(){
    this.login = localStorage.getItem('session_id');
   console.log("ionWillenter");
  }

  async logOut(){
    const alert = await this.alertCtrl.create({
      header:'Cerrar Sesion',
      subHeader:'¿Desea Continuar?',
      buttons:[{
        text:'Okay',
        handler: async ()=>{
            const loading = await this.loadingCtrl.create({
              animated:true,
              message:'Espere...',
            });
            loading.present();
            localStorage.removeItem('session_mail');
            localStorage.removeItem('session_passwd');
            localStorage.removeItem('session_id');
            this.presentToast('bottom');
            setTimeout(() => {
              loading.dismiss();
            }, 3000);
            window.location.reload();
            //this.router.navigate(['home']);
        }
      },'Cancel']
    });
    await alert.present();

  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastCtrl.create({
      message: 'Listo!, Session terminada',
      duration: 1500,
      position: position,
      color: 'success'
    });

    await toast.present();
  }

}
