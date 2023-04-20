import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  public appPages = [
    { title:'Inicio', url:'home', icon:'home' } ,
    { title: 'Platillos', url: 'platillos', icon: 'restaurant' },
    { title: 'Snacks', url: 'snacks', icon: 'fast-food' },
    { title: 'Postres', url: 'postres', icon: 'nutrition' },
    { title: 'Bebidas', url: '/folder/archived', icon: 'beer' },
    { title: 'Adicionales', url: '/folder/trash', icon: 'add-circle' },
    { title: 'Pedido', url: '/folder/spam', icon: 'newspaper' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
