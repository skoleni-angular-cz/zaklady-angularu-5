import { Observable, of } from "rxjs";

export const MOCK_HOLIDAY_SATURDAY = '2022-12-24';
export const MOCK_HOLIDAY_SUNDAY = '2022-12-25';
export const MOCK_HOLIDAY_MONDAY = '2022-12-26';

export const MOCK_HOLIDAYS = [
  MOCK_HOLIDAY_SUNDAY,
  MOCK_HOLIDAY_MONDAY,
];

export class StateHolidaysServiceMock {

  getStateHolidayDates(year: number): Observable<string[]> {
    return of(MOCK_HOLIDAYS);
  }

}
