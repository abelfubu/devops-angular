import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListasDeRepositorioComponent } from './listas-de-repositorio/listas-de-repositorio.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', redirectTo: 'perfil', pathMatch:'full'},
  { path: 'perfil' , component: ProfileComponent},
  { path: 'repositorio', component: ListasDeRepositorioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
