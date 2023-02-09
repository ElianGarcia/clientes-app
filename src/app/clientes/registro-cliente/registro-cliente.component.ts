import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {
  mainForm: FormGroup;
  isLinear = true;
  form1 = new FormControl('')
  form2 = new FormControl('')
  @ViewChild('stepper') stepper: MatStepper;

  constructor() { }

  ngOnInit(): void { }

  personalInfoSaved($event : Cliente) {
    this.setState(this.form1, false);
  }

  addressInfoSaved($event : Cliente) {
    this.setState(this.form2, false);
    this.next();
  }

  next() {
    console.log(this.stepper)
      //this.stepper.selectedIndex = 2;

      this.stepper.next();
  }

  setState(control: FormControl, state: boolean) {
    if (state)
      control.setErrors({ "required": true })
    else 
      control.reset()
  }

}
