import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MesasService } from 'src/app/services/mesas/mesas.service';
import { PedidosService } from 'src/app/services/pedidos/pedidos.service';
import { ResumenPedidoService } from 'src/app/services/resumenPedidos/resumen-pedido.service';
import { flatMap, interval } from 'rxjs';

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
  ordenesListas :any;
  resumenPed:any =[];
  ped:any;

  constructor(private router: Router,
              private mesaServ: MesasService,
              private pedidos : ResumenPedidoService,
              private pedidosHist: PedidosService,
              private toastController:ToastController) {}

              subscribes$ = interval(60000)
              .pipe(flatMap(async () => this.getPedidos()))
              //this.getData()
              .subscribe(
                data => {
                console.log(", hago peticiones");

                //console.log(this.data);
              });

  ngOnInit() {
    console.log(this.login);
    console.log(this.ordenesListas);

  }

  ionViewWillEnter() {
    console.log("hom will");
    this.login = localStorage.getItem('session_id');
    this.getMesas();
    this.getPedidos();
  }
  ionViewWillLeave(){
    console.log("dejo de pedir peticiones");
    this.subscribes$.unsubscribe();
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
    console.log(localStorage.getItem('session_id'));

      this.pedidos.getResumen().subscribe(
        resp=>{
          this.resumenPed = resp.items;
          console.log(this.resumenPed);
        }
      );
    this.pedidosHist.getPedidos().subscribe(
      Response =>{
        this.ped = Response.items;
      }
    )
    this.getMesas();
  }

}
