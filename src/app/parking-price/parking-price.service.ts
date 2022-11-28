import { Injectable } from '@angular/core';
import { StateHolidaysService } from './state-holidays.service';

@Injectable({
  providedIn: 'root'
})
export class ParkingPriceService {

  static HOURLY_RATE_CZK = 15;
  static CURRENT_YEAR = new Date().getFullYear();

  private initialized = false;
  private holidays: string[] = [];

  constructor(
    private stateHolidaysService: StateHolidaysService,
  ) {
    this.stateHolidaysService.getStateHolidayDates(
      ParkingPriceService.CURRENT_YEAR
    ).subscribe(holidays => {
      this.initialized = true;
      this.holidays = holidays;
    });
  }

  /**
   * Calculates a price to charge for parking:
   * - For Saturdays and Sundays, the price should be 0.
   * - For state holidays which are not saturday/sunday, the price should be -50% off.
   * - For any other day, the price should be full, i.e. duration in hrs * hourly rate.
   *
   * @param date ISO date of parking. ex. "2022-04-28".
   * @param durationHrs duration in hours for how long the user wishes to use a parkplace. Must be a natural number.
   */
  getParkingPrice(date: string, durationHrs: number) {
    if (!this.initialized) {
      throw new Error('State holidays not yet initialized.');
    }
    if (!Number.isInteger(durationHrs) || durationHrs <= 0) {
      throw new Error('Duration must be a natural number.');
    }

    const dateObj = new Date(date);

    if (isNaN(Number(dateObj))) {
      throw new Error('Invalid date supplied.');
    }

    const dayOfWeek = dateObj.getUTCDay();

    // utc saturday = 6, utc sunday = 0
    if (dayOfWeek === 6 || dayOfWeek === 0) {
      return 0;
    }
    else {
      const fullPrice = ParkingPriceService.HOURLY_RATE_CZK * durationHrs;

      if (this.holidays.includes(date)) {
        return fullPrice * 0.5;
      }
      else {
        return fullPrice;
      }
    }
  }

}
