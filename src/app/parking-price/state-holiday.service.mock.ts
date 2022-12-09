import {Observable, of} from "rxjs";

export class StateHolidayServiceMock {

  getStateHolidayDates(year: number): Observable<string[]> {
    return of(['2022-12-25', '2022-12-26']);
  }

}
