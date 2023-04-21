import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BebidasPage implements OnInit {

  login:any;

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter(){
   this.login = localStorage.getItem('session_id');
  }

}
