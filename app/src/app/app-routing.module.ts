import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { SecundarioComponent } from './secundario/secundario.component';
import { NoencontradoComponent } from './noencontrado/noencontrado.component';

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent,  data: { title: 'Heroes List' }},
  { path: 'secundario', component: SecundarioComponent },  
  { path: 'secundario/:id', component: SecundarioComponent },  
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: '**', component: NoencontradoComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
