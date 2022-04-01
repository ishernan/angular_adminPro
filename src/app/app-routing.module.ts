import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [  

  //COMANTARIO PARA INDICAR QUE RUTAS ESTAN TOMADAS Y DONDE ESTAN TRABAJANDO
  // path: '/dashboard', PagesRouting
  // path: '/auth', AuthRouting
  // path: '/medicos', AuthRouting
  // path: '/compras', ComprasRouting

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule, //se incluye la ruta hija
    AuthRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
