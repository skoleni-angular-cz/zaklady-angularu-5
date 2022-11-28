import { Component } from '@angular/core';
import { formatAddress } from './address-utils';

@Component({
  selector: 'app-address-utils',
  templateUrl: './address-utils.component.html',
  styleUrls: ['./address-utils.component.css']
})
export class AddressUtilsComponent {

  houseNumber: string | undefined;
  postalCode: string | undefined;
  city: string | undefined;

  district: string | undefined;
  orientationNumber: string | undefined;
  street: string | undefined;

  result: string | undefined;

  formatAddress() {
    if (this.houseNumber && this.postalCode && this.city) {
      this.result = formatAddress({
        houseNumber: this.houseNumber!,
        postalCode: this.postalCode!,
        city: this.city!,
        district: this.district,
        orientationNumber: this.orientationNumber,
        street: this.street,
      });
    }
  }

}
