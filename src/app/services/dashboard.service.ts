import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from '../models/dashboard';
import { Endpoints } from './endpoints';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient : HttpClient) { }

  getDashboard() : Observable<Dashboard> {
    return this.httpClient.get<Dashboard>(Endpoints.GET_DASHBOARD);
  }
}
