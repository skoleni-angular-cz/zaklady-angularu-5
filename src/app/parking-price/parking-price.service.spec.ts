import { TestBed } from '@angular/core/testing';
import { MOCK_HOLIDAY_MONDAY, StateHolidaysServiceMock } from 'src/app/parking-price/state-holidays.service.mock';

import { ParkingPriceService } from './parking-price.service';
import { StateHolidaysService } from './state-holidays.service';

describe('ParkingPriceService', () => {
  let service: ParkingPriceService;
  ParkingPriceService.CURRENT_YEAR = 2022;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.overrideProvider(StateHolidaysService, { useFactory: () => new StateHolidaysServiceMock() });
    service = TestBed.inject(ParkingPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should charge full amount for an ordinary day', () => {
    expect(service.getParkingPrice('2022-01-03', 1)).toEqual(
      ParkingPriceService.HOURLY_RATE_CZK
    );
  });

  it('should charge nothing for saturday', () => {
    expect(service.getParkingPrice('2022-01-01', 1000)).toEqual(0);
  });

  it('should charge nothing for sunday', () => {
    expect(service.getParkingPrice('2022-01-02', 10000000)).toEqual(0);
  });

  it('should charge half for a state holiday', () => {
    const durationHrs = 2;

    expect(service.getParkingPrice(MOCK_HOLIDAY_MONDAY, durationHrs)).toEqual(
      0.5 * durationHrs * ParkingPriceService.HOURLY_RATE_CZK
    );
  });

  it('should throw an exception for invalid date', () => {
    expect(() => service.getParkingPrice('2022-02-41', 1)).toThrowError('Invalid date supplied.');
  });

  it('should throw an exception for duration that is not a natural number', () => {
    expect(() => service.getParkingPrice('2022-01-31', 0.3333334)).toThrowError(
      'Duration must be a natural number.'
    );
  });


});
