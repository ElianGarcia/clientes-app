import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/models/address';
import { AddressesService } from 'src/app/services/addresses.service';

@Component({
  selector: 'app-addresses-list',
  templateUrl: './addresses-list.component.html',
  styleUrls: ['./addresses-list.component.css']
})
export class AddressesListComponent implements OnInit {
  list: Address[];

  constructor(private route : ActivatedRoute, private addressService : AddressesService) { 
    this.route.params.subscribe(
      (params) => {
        this.addressService.getAddresses(params['id']).subscribe({
          next: (data) => {
            this.list = data;
          }
        });
      }
    );
  }

  ngOnInit(): void {
  }

}
