import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Batman','Iroman','Goku'];

  heroeBorrado: string ="";

  borrarHeroe(){
    //const heroeBorrado = this.heroes.pop();
    this.heroeBorrado = this.heroes.pop() || "";
    console.log(`El heroe eliminado fue: ${this.heroeBorrado}`)
  }

}
