import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlimentosService } from 'src/app/services/alimentos/alimentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BebidasPage implements OnInit {

  login:any;
  bebidas :any;

  constructor(private alimentos : AlimentosService,
              private router: Router) { }

  ngOnInit() {
    this.getBebidas();
  }

  ionViewWillEnter(){
   this.login = localStorage.getItem('session_id');
   this.getBebidas();
  }

  getBebidas(){
    this.alimentos.getBebidas().subscribe(
      resp =>{
        this.bebidas = resp.items;
      }
    )
  }

  goDetails(item_id:any){
    console.log(item_id);
    this.router.navigate(['platillo',item_id])

  }

}
