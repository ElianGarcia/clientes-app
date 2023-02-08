import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';


@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {
  mainForm: FormGroup;

  constructor(private fb: FormBuilder, private clientesService : ClientesService) { }

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      cedula: ['', [Validators.required, Validators.minLength(11)]],
      birthdate: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
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
        return `El campo ${controlName} debe tener como mínimo 8 caracteres.`;
      } else if (this.mainForm.get(controlName)?.hasError('minlength')) {
        return `El campo ${controlName} debe tener como mínimo 11 caracteres.`;
      }
    }
    return '';
  }

  public register() {
    if (this.mainForm.valid) {
      this.clientesService.register(this.mainForm.value).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        }
      });
    } else {
      console.log('Formulario invalido');
    }

  }

}
