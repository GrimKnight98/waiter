import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlimentosService } from 'src/app/services/alimentos/alimentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.page.html',
  styleUrls: ['./snacks.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SnacksPage implements OnInit {

  login :any;
  snacks :any=[];

  constructor(private alim:AlimentosService,
              private router : Router) { }

  ngOnInit() {

    this.getSnacks();
  }

  ionViewWillEnter(){
   this.login = localStorage.getItem('session_id')
  }

  getSnacks(){
    const tipo = 2;
    this.alim.getSnacks(tipo).subscribe(
      resp=>{
        this.snacks=resp.items;
        console.log(this.snacks);

      }
    )
  }

  goDetails(item_id:any){
    console.log(item_id);
    this.router.navigate(['platillo',item_id])

  }

}
