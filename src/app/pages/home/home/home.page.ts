import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { MesasService } from 'src/app/services/mesas/mesas.service';
import { PedidosService } from 'src/app/services/pedidos/pedidos.service';

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

  resumenPed:any =[];

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
              private mesaServ: MesasService,
              private pedidos : PedidosService) {}

  ngOnInit() {
    console.log(this.login);
    this.getPedidos();
  }

  ionViewWillEnter() {
    console.log("hom will");

    this.login = localStorage.getItem('session_id');
    this.getMesas();

    this.getPedidos();
  }

  loginFn() {
    this.router.navigate(['login']);
  }

  getMesas(){
    this.mesaServ.getMesas().subscribe(
      resp=>{
        this.mesas = resp.items;
      }
    );
  }

  getPedidos(){
      this.pedidos.resumenPedidos().subscribe(
        resp=>{
          this.resumenPed = resp.items;
          console.log(this.resumenPed);

        }
      )
  }

}
