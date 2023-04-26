import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlimentosService } from 'src/app/services/alimentos/alimentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionales',
  templateUrl: './adicionales.page.html',
  styleUrls: ['./adicionales.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AdicionalesPage implements OnInit {

  login :any;
  adicionales:any;

  constructor(private alimentos : AlimentosService,
              private router : Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.login = localStorage.getItem('session_id');
    this.getAdicionales();
  }

  getAdicionales(){
    this.alimentos.getAdicionales().subscribe(
      resp => {
        this.adicionales = resp.items;
      }
    )
  }
  goDetails(item_id:any){
    console.log(item_id);
    this.router.navigate(['platillo',item_id])

  }

}
