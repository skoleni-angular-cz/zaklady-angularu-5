import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export interface HolidayDto {
  date: string; // example: 2022-12-01
  dayNumber: string; // example: 1
  dayInWeek: 'pondělí'|'úterý'|'středa'|'čtvrtek'|'pátek';
  monthNumber: string; // example: 10
  month: {
    nominative: 'leden'|'únor'|'březen'|'duben'|'květen'|'červen'|'červenec'|'srpen'|'září'|'říjen'|'listopad'|'prosinec',
    genitive: 'ledna'|'února'|'března'|'dubna'|'května'|'června'|'července'|'srpna'|'září'|'října'|'listopadu'|'prosince'
  },
  year: string,
  name: string, // Who is celebrating their name-day on a given date
  isHoliday: boolean,
  holidayName: string | null, // example: Den české státnosti
}

@Injectable({
  providedIn: 'root'
})
export class StateHolidaysService {

  constructor(
    private httpClient: HttpClient,
  ) {}

  /**
   * Returns a list of ISO dates which are considered Czech national holidays.
   * ex.: [... "2022-05-01", ..., "2022-10-28", "2022-11-17", "2022-12-24", ...]
   * @param year year for which to get the holidays.
   */
  getStateHolidayDates(year: number): Observable<string[]> {
    return this.httpClient.get<HolidayDto[]>(`https://svatkyapi.cz/api/day/${year}-01-01/interval/366`).pipe(
      map((holidays: HolidayDto[]) => {
        return holidays
          .filter(h => h.isHoliday)
          .filter(h => h.year === String(year))
          .map(h => h.date);
      }),
    );
  }

}
