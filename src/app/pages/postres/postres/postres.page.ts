import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlimentosService } from 'src/app/services/alimentos/alimentos.service';

@Component({
  selector: 'app-postres',
  templateUrl: './postres.page.html',
  styleUrls: ['./postres.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PostresPage implements OnInit {

  postres :any=[];
  login : boolean = true;

  constructor(private ALIM:AlimentosService) { }

  ngOnInit() {
    this.getPostres();
  }

  getPostres(){
    const tipo = 4;
    this.ALIM.getPostres(tipo).subscribe(
      resp => {
          this.postres = resp.items;
      }
    )
  }
}
