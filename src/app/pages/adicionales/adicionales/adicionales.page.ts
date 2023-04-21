import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-adicionales',
  templateUrl: './adicionales.page.html',
  styleUrls: ['./adicionales.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AdicionalesPage implements OnInit {

  login :any;

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.login = localStorage.getItem('session_id');
  }

}
