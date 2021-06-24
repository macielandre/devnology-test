import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { CompraComponent } from './compra/compra.component';
import { EditarComponent } from './editar/editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VendaComponent } from './venda/venda.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CompraComponent,
    EditarComponent,
    VendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
