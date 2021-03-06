import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export const enum ChartColors {
  Blue = '#7897CC',
  Teal = '#4bc0c0',
  Orange = '#FF9370',
}

export interface DataLabels {
  labels: string[];
  data: number[];
}

@Injectable({
  providedIn: 'root',
})
export class PackageService {
  labels = ['2016', '2017', '2018', '2019'];
  randomNumber = (min = 500, max = 1000) => Math.random() * (max - min) + min;
  dataLabels$ = (data: number[]): Observable<DataLabels> =>
    of({ labels: this.labels, data }).pipe(delay(this.randomNumber()));

  get shipped$() {
    return this.dataLabels$([1000, 2000, 2450, 3200]);
  }

  get shippedLineChart$() {
    return this.shipped$.pipe(this.mapLineChart('Shipped', ChartColors.Teal));
  }

  get returned$() {
    return this.dataLabels$([850, 700, 1200, 1700]);
  }

  get returnedLineChart$() {
    return this.returned$.pipe(this.mapLineChart('Returned', ChartColors.Blue));
  }

  get rushed$() {
    return this.dataLabels$([600, 1200, 1300, 2400]);
  }

  get rushedLineChart$() {
    return this.rushed$.pipe(this.mapLineChart('Rushed', ChartColors.Orange));
  }

  mapLineChart(label: string, borderColor = ChartColors.Blue) {
    return map(({ data, labels }) => ({
      labels,
      datasets: [
        {
          label,
          data,
          fill: true,
          borderColor,
        },
      ],
    }));
  }

  handleRouter(type: string): Observable<DataLabels> {
    return {
      shipped: this.shipped$,
      returned: this.returned$,
      rushed: this.rushed$,
    }[type.trim().toLowerCase()];
  }

  allowedHistoryType(type: string) {
    return (
      type != null && ['shipped', 'returned', 'rushed'].some(t => t === type.trim().toLowerCase())
    );
  }
}
