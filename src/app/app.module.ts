import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';

import { ListasDeRepositorioComponent } from './listas-de-repositorio/listas-de-repositorio.component';
import { AsideComponent } from './aside/aside.component';
import { UsuarioComponent } from './usuario/usuario.component';


@NgModule({
  declarations: [
    AppComponent,

    ProfileComponent,
    HeaderComponent,

    ListasDeRepositorioComponent,

    AsideComponent,

    UsuarioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
