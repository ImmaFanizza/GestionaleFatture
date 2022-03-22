import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettagliClientiComponent } from './dettagli-clienti/dettagli-clienti.component';
import { DettagliFattureComponent } from './dettagli-fatture/dettagli-fatture.component';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { EditFatturaComponent } from './edit-fattura/edit-fattura.component';
import { FattureClienteComponent } from './fatture-cliente/fatture-cliente.component';
import { HomeComponent } from './home/home.component';
import { InputClientiComponent } from './input-clienti/input-clienti.component';
import { InputFatturaComponent } from './input-fattura/input-fattura.component';
import { InputProvinciaComponent } from './input-provincia/input-provincia.component';
import { TabellaClientiComponent } from './tabella-clienti/tabella-clienti.component';
import { TabellaFattureComponent } from './tabella-fatture/tabella-fatture.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'clienti',
    component: TabellaClientiComponent
  },
  {
    path: 'clienti/new',
    component: InputClientiComponent
  },
  {
    path: 'clienti/:id',
    component: DettagliClientiComponent
  },
  {
    path: 'clienti/:id/edit',
    component: EditClienteComponent
  },
  {
    path: 'fatture',
    component: TabellaFattureComponent
  },
  {
    path: 'fatture/:id',
    component: DettagliFattureComponent
  },
  {
    path: 'fatture/:id/edit',
    component: EditFatturaComponent
  },
  {
    path: 'fattura/:id/new',
    component: InputFatturaComponent
  },
  {
    path: 'province',
    component: InputProvinciaComponent
  },
  {
    path: 'fatture/:id/cliente',
    component: FattureClienteComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
