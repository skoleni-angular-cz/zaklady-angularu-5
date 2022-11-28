import { Component, OnInit } from '@angular/core';
import { ParkingPriceService } from './parking-price.service';

@Component({
  selector: 'app-parking-price',
  templateUrl: './parking-price.component.html',
  styleUrls: ['./parking-price.component.css']
})
export class ParkingPriceComponent {

  duration: number | undefined;
  date: string | undefined;

  resultPrice: number | undefined;

  constructor(
    private parkingPriceService: ParkingPriceService,
  ) { }

  calculateParkingPrice() {
    if (this.duration && this.date) {
      this.resultPrice = this.parkingPriceService.getParkingPrice(this.date, this.duration);
    }
  }

}
