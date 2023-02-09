import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressesListComponent } from './addresses-list/addresses-list.component';
import { ClientesComponent } from './clientes.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent
  },
  {
    path: 'registro',
    component: RegistroClienteComponent
  },
  {
    path: 'registro/:id',
    component: RegistroClienteComponent
  },
  {
    path: 'address-list/:id',
    component: AddressesListComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
