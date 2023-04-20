import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  login : any = localStorage.getItem('session_id');

  mesas = [{
    nombre:"Mesa 1",
    status:"libre"
  },
  {
    nombre:"Mesa 2",
    status:"ocupado"
  },
  {
    nombre:"Mesa 3",
    status:"ocupado"
  },
  {
    nombre:"Mesa 4",
    status:"libre"
  },
  {
    nombre:"Mesa 5",
    status:"ocupado"
  }

]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginFn(){

this.router.navigate(['login']);

  }

}