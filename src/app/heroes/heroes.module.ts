import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [ //Aqui los componentes que la conforman
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //Aqui lo que queremos mostrar por fuera de este modulo
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule{}