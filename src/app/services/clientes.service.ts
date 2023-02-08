import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { Endpoints } from './endpoints';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(public httpClient : HttpClient) { }

  getClientes() : Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(Endpoints.GET_CLIENTES);
  }

  register(cliente : Cliente) : Observable<Cliente> {
    return this.httpClient.post<Cliente>(Endpoints.REGISTER_CLIENTES, cliente);
  }

  update(cliente : Cliente) : Observable<Cliente> {
    return this.httpClient.put<Cliente>(Endpoints.UPDATE_CLIENTES, cliente);
  }

  delete(id : number) : Observable<Cliente> {
    return this.httpClient.delete<Cliente>(Endpoints.DELETE_CLIENTES + '/' + id);
  }
}
