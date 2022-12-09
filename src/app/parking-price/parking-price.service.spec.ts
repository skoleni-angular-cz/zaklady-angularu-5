import { TestBed } from '@angular/core/testing';

import { ParkingPriceService } from './parking-price.service';
import {StateHolidaysService} from "./state-holidays.service";
import {StateHolidayServiceMock} from "./state-holiday.service.mock";

describe('ParkingPriceService', () => {
  let service: ParkingPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.overrideProvider(
      StateHolidaysService,
      {
        useValue: new StateHolidayServiceMock()
      }
    );
    ParkingPriceService.CURRENT_YEAR = 2022;
    service = TestBed.inject(ParkingPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it charges hourly rate for one hour stay on ordinary day', () => {
    expect(
      service.getParkingPrice('2022-12-08', 1),
    ).toEqual(ParkingPriceService.HOURLY_RATE_CZK);
  });

  it('charges nothing for a state holiday on Sunday', () => {
    expect(
      service.getParkingPrice('2022-12-25', 1),
    ).toEqual(0);
  });

  it('charges -50% off for a state holiday on working day', () => {
    expect(
      service.getParkingPrice('2022-12-26', 1),
    ).toEqual(0.5 * ParkingPriceService.HOURLY_RATE_CZK);
  });
});
