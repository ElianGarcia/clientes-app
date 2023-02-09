import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/models/cliente';
import { MatPaginator } from '@angular/material/paginator';
import { ClientesService } from 'src/app/services/clientes.service';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  dataSource: MatTableDataSource<Cliente>;
  displayedColumns = [
    'id',
    'name',
    'lastname',
    'cedula',
    'email',
    'edit',
    'see',
    'delete'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private clientesService: ClientesService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.loadClientes();
  }

  loadClientes() {
    this.clientesService.getClientes().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteCliente(id: number) {
    this.modalService.showConfirmMessage('¿Está seguro de eliminar este cliente?').subscribe({
      next: (res) => {
        if (res) {
          this.clientesService.delete(id).subscribe(
            (data) => {
              this.loadClientes();
            }
          );
        }
      }
    });

  }
}
