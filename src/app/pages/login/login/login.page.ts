import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  email :any;
  passwd:any;
  credentials:any;

  constructor(private loadingCtrl:LoadingController,
              private router: Router,
              private logi : LoginService,
              private toastController:ToastController) { }

  ngOnInit() {
  }

  async login(){
    var body = {
      "P_USER":this.email,
      "P_PASSWD":this.passwd
    };
    var options = {
      headers: {
          'Content-Type': 'application/json'
     }
    }
    const loading = await this.loadingCtrl.create({
      message:"Espere, por favor ..."
    });


      this.logi.login(body,options).subscribe(
        res =>{
          this.credentials = res;
          console.log(this.credentials);


          if (this.credentials.USR) {
            this.email='';
            this.passwd='';
            localStorage.setItem('session_mail', this.credentials.USR);
            localStorage.setItem('session_passwd',this.credentials.PASS);
            localStorage.setItem('session_id', this.credentials.USR_I);
            console.log(localStorage.getItem('session_mail'));
            loading.dismiss();
            this.router.navigate(['home']);
          } else{
              this.presentToast('bottom');
              loading.dismiss();
          }
        }
      )


    loading.present();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Error! los datos no existen en DB',
      duration: 1500,
      position: position,
      color:'danger'
    });

    await toast.present();
  }

}
