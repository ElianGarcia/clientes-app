import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../models/dashboard';
import { ClientesService } from '../services/clientes.service';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  dashboard: Dashboard;

  constructor(private dashboardService : DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getDashboard().subscribe({
      next: (data) => {
        this.dashboard = data;
      }
    })

  }

}
