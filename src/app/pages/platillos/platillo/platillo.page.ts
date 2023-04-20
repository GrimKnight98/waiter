import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-platillo',
  templateUrl: './platillo.page.html',
  styleUrls: ['./platillo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PlatilloPage implements OnInit {

  cantidad :number = 0;

  constructor() { }

  ngOnInit() {
  }
  increment() {
    this.cantidad++;
  }

  decrement() {
    this.cantidad--;
  }

}
