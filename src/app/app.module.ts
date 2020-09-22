import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListasDeRepositorioComponent } from './listas-de-repositorio/listas-de-repositorio.component';

@NgModule({
  declarations: [
    AppComponent,
    ListasDeRepositorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
