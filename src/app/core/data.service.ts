import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  dates = ['2019/01', '2019/02', '2019/03'];

  get packagesReturned$() {
    const values = [1000, 3000, 2000];

    return of(
      this.dates.map((d, i) => ({
        name: d,
        value: values[i],
      }))
    );
  }
}
