import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  mainForm: FormGroup;
  @Output() next = new EventEmitter();
  @Output() saved = new EventEmitter<Cliente>();

  constructor(private fb: FormBuilder, private clientesService : ClientesService,
    private route : ActivatedRoute, private modalService : ModalService) { 
    this.route.params.subscribe(
      (params) => {
        if (params['id']) {
          this.clientesService.getCliente(params['id']).subscribe(
            (data) => {
              this.mainForm.patchValue(data);
              this.clientesService.setTempClienteId(data.clienteId);
              this.saved.emit(data);
            }
          );
        }
      }
    );
  }

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      clienteId: [0, [Validators.required]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      cedula: ['', [Validators.required, Validators.minLength(11)]],
      birthDate: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      active: [true, [Validators.required]],
    });
  }

  public getError(controlName: string): string {
    if (this.mainForm.get(controlName) != null) {
      if (this.mainForm.get(controlName)?.hasError('required')) {
        return `El campo ${controlName} es obligatorio.`;
      } else if (this.mainForm.get(controlName)?.hasError('email')) {
        return `El campo ${controlName} debe ser un email válido.`;
      } else if (this.mainForm.get(controlName)?.hasError('minlength')) {
        return `El campo ${controlName} debe tener como mínimo 11 caracteres.`;
      } 
    }
    return '';
  }

  public register(next : boolean) {
    if (this.mainForm.valid) {
      this.clientesService.register(this.mainForm.value).subscribe({
        next: (data) => {
          console.log(data);
          this.clientesService.setTempClienteId(data.clienteId || this.mainForm.value.clienteId);
          
          this.mainForm.value.clienteId > 0 
            ? this.modalService.showMessage('El cliente se actualizó correctamente.') 
            : this.modalService.showMessage('El cliente se registró correctamente.');

          this.saved.emit(data);

          if(next)
            this.next.emit();
        },
        error: (error) => {
          console.log(error);
        }
      });
    } else {
      this.modalService.showMessage('Llena todos los campos requeridos.');
      this.mainForm.markAllAsTouched();
    }    
  }
}
