import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [   //Importamos Componentes
    AppComponent
  ],
  imports: [  //Importamos modulos
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],  //Servicios a los modulos
  bootstrap: [AppComponent]
})
export class AppModule { }
