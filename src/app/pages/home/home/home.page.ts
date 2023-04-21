import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { MesasService } from 'src/app/services/mesas/mesas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage implements OnInit {
  login: any = localStorage.getItem('session_id');

  mesas :any=[];

  // mesas = [
  //   {
  //     nombre: 'Mesa 1',
  //     status: 'libre',
  //   },
  //   {
  //     nombre: 'Mesa 2',
  //     status: 'ocupado',
  //   },
  //   {
  //     nombre: 'Mesa 3',
  //     status: 'ocupado',
  //   },
  //   {
  //     nombre: 'Mesa 4',
  //     status: 'libre',
  //   },
  //   {
  //     nombre: 'Mesa 5',
  //     status: 'ocupado',
  //   },
  // ];

  constructor(private router: Router,
              private mesaServ: MesasService) {}

  ngOnInit() {
    console.log(this.login);
  }

  ionViewWillEnter() {
    console.log("hom will");

    this.login = localStorage.getItem('session_id');
    this.getMesas();
  }

  loginFn() {
    this.router.navigate(['login']);
  }

  getMesas(){
      // this.mesaServ.getMesasDisponibles().subscribe(
      //   resp=>{
      //     this.mesas = resp.items;
      //     console.log(this.mesas);

      //   }
      // );

    this.mesaServ.getMesas().subscribe(
      resp=>{
        this.mesas = resp.items;
      }
    );
  }

}
