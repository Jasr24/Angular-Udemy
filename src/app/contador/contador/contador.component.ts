import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>
        <h3>La base es: <strong> {{base}} </strong></h3>


        <button (click)="acumular(base)"> + {{base}} </button>

        <span> {{ numero }} </span>

        <button (click)="acumular(-base)"> - {{base}} </button>
    `
})
export class ContadorComponent {
    titulo  : string = 'Contador App';   //Atributo que podremos usar en el html, se usa asi: <h1>{{ titulo }}</h1>... {{ dentro de aui se puede usar codigo javascript, typescript }}
    numero  : number = 10;
    base    : number = 5;

    acumular( valor: number ) {
      this.numero += valor;
  }
}