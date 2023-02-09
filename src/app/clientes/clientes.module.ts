import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list/list.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { AddressInfoComponent } from './address-info/address-info.component';
import { AddressesListComponent } from './addresses-list/addresses-list.component';


@NgModule({
  declarations: [
    ClientesComponent,
    RegistroClienteComponent,
    ListComponent,
    PersonalInfoComponent,
    AddressInfoComponent,
    AddressesListComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    SharedModule
  ]
})
export class ClientesModule { }
