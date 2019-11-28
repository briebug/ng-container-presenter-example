import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export const enum ChartColors {
  Blue = '#7897CC',
  Teal = '#4bc0c0',
  Orange = '#FF9370',
}

@Injectable({
  providedIn: 'root',
})
export class PackageService {
  labels = ['2016', '2017', '2018', '2019'];
  randomNumber = (min = 1000, max = 2500) => Math.random() * (max - min) + min;
  dataLabels = (data: number[]) =>
    of({ labels: this.labels, data }).pipe(delay(this.randomNumber()));

  get shipped$() {
    return this.dataLabels([1000, 2000, 2450, 3200]);
  }

  get returned$() {
    return this.dataLabels([850, 700, 1200, 1700]);
  }

  get rushed$() {
    return this.dataLabels([600, 1200, 1300, 2400]);
  }
}
