import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/models/address';
import { AddressesService } from 'src/app/services/addresses.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.css']
})
export class AddressInfoComponent implements OnInit {
  @Output() saved = new EventEmitter();
  mainForm: FormGroup;

  constructor(private addressesService : AddressesService, private clientesService : ClientesService,
     private fb : FormBuilder, private modalService : ModalService) { }

  ngOnInit(): void {
    this.addressesService.getAddresses(this.clientesService.getTempClienteId()).subscribe({
      next: (response : Address[]) => {
        if(response.length > 0) {
          response.forEach((address : Address) => {
            this.items.push(this.fb.group({
              addressId: [address.addressId, [Validators.required]],
              alias: [address.alias, [Validators.required]],
              street: [address.street, [Validators.required]],
              city: [address.city, [Validators.required]],
              state: [address.state, [Validators.required]],
              zipCode: [address.zipCode, [Validators.required]],
              country: [address.country, [Validators.required]],
              active: [address.active, [Validators.required]],
              clienteId: [address.clienteId, [Validators.required]]
            }));
          });
        } else {
          this.addItem();
        }
      },
      error: (err) => {
        this.modalService.showMessage('Ha ocurrido un error al obtener las direcciones del cliente.');
      }
    });

    this.mainForm = this.fb.group({
      items: new FormArray([])
    });

    this.addItem();
  }

  addItem() {
    this.items.push(this.createItem());

    if(this.items.length > 1) {
      this.save(false);
    }
  }

  get items() {
    return (<FormArray>this.mainForm.controls['items']);
  }
  
  createItem(): FormGroup {
    return this.fb.group({
      alias: ['', [Validators.required]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      country: ['', [Validators.required]],
      active: [true, [Validators.required]],
      clienteId: [this.clientesService.getTempClienteId(), [Validators.required]]
    });
  }

  public getError(controlName: string, index: number): string {
    let control = this.items.controls[index].get(controlName);

    if (control != null) 
      if (control?.hasError('required')) 
        return `El campo ${controlName} es obligatorio.`;
    
    return '';
  }

  save(next : boolean) {
    if (this.mainForm.valid) {
      this.addressesService.register(this.items.value).subscribe({
        next: (response) => {
          this.modalService.showMessage('Direcciones registradas con éxito.');
          this.saved.emit();
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