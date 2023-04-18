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
    { title: 'Platillos', url: '/folder/inbox', icon: 'mail' },
    { title: 'Snacks', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Postres', url: '/folder/favorites', icon: 'heart' },
    { title: 'Bebidas', url: '/folder/archived', icon: 'archive' },
    { title: 'Adicionales', url: '/folder/trash', icon: 'trash' },
    { title: 'Pedido', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
