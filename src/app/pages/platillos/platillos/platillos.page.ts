import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlimentosService } from 'src/app/services/alimentos/alimentos.service';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.page.html',
  styleUrls: ['./platillos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PlatillosPage implements OnInit {

  platillos:any = []

  login:boolean=true;

  constructor(private alimen : AlimentosService) { }

  ngOnInit() {
    this.getPlatillos();

  }


  getPlatillos(){
    const tipo=1;
    this.alimen.getPlatillos(tipo).subscribe(
      resp =>{
        this.platillos = resp.items;
        console.log(this.platillos);

      }
    )
  }

}
