import { Injectable } from '@angular/core'
import { Personaje } from '../interfases/dbz.interface';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegueta',
          poder: 7500
        }
      ]
    get personajes(): Personaje[] {
        return [...this._personajes];  //[...this._personajes] practica de javascrip para que no manipule los _personajes fuera de aqui.. lo ... es para que cree una nueva instancia con los otros juntos
    }

    constructor(){
    }

    agregarPersonaje( personaje: Personaje ){
        this._personajes.push(personaje);
    }

}