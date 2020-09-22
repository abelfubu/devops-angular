import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ListasDeRepositorioComponent } from './listas-de-repositorio/listas-de-repositorio.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    HeaderComponent,
    ProfileComponent,
    UsuarioComponent,
    ListasDeRepositorioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AsideComponent],
  schemas: [],
})
export class AppModule {}
