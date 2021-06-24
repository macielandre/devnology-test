import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarComponent } from './editar/editar.component';
import { PrincipalComponent } from './principal/principal.component';
import { CompraComponent } from './compra/compra.component';
import { VendaComponent } from './venda/venda.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent
  },
  {
    path: 'compra',
    component: CompraComponent
  },
  {
    path: 'venda',
    component: VendaComponent
  },
  {
    path: 'editar',
    component: EditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
