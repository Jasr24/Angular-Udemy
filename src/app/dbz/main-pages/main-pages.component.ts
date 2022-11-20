import { Component } from '@angular/core';
import { Personaje } from '../interfases/dbz.interface';

import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-pages',
  templateUrl: './main-pages.component.html'
})
export class MainPagesComponent {

    

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }
  
  constructor (){
    
  }

}
