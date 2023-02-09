import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../models/address';
import { Endpoints } from './endpoints';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {

  constructor(private httpClient : HttpClient) { 

  }

  getAddresses(clienteId : number) : Observable<Address[]> {
    return this.httpClient.get<Address[]>(Endpoints.GET_ADDRESS + '/' + clienteId);
  }

  getAddress(id : number) : Observable<Address> {
    return this.httpClient.get<Address>(Endpoints.GET_ADDRESS + '/' + id);
  }

  register(address : Address) : Observable<Address> {
    return this.httpClient.post<Address>(Endpoints.REGISTER_ADDRESS, address);
  }

  update(address : Address) : Observable<Address> {
    return this.httpClient.put<Address>(Endpoints.UPDATE_ADDRESS, address);
  }

  delete(id : number) : Observable<Address> {
    return this.httpClient.delete<Address>(Endpoints.DELETE_ADDRESS + '/' + id);
  }
}
