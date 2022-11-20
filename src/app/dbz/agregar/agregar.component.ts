import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfases/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  //Esto viene desde el padre.
  @Input(/* Puede aver un alias */)
  nuevo: Personaje = {
    nombre: "",
    poder: 0
  }

  constructor(private dbzServicee: DbzService){

  }

  /*@Output(/* Puede aver un alias )   //Esto envia informacion al componente padre
  onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();*/

  agregar(){

    if(this.nuevo.nombre.trim().length == 0){
      return;
    }
    //this.onNuevoPersonaje.emit(this.nuevo);

    this.dbzServicee.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: "",
      poder: 0
    }

  }
}
