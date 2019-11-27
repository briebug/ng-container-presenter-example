import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export const enum ChartColors {
  Green = '#78CC9B',
  Blue = '#7897CC',
  Teal = '#4bc0c0',
  Orange = '#FF9370',
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  labels = ['2016', '2017', '2018', '2019'];
  randomNumber = (min = 1000, max = 2500) => Math.random() * (max - min) + min;
  dataLabels = data => of({ labels: this.labels, data }).pipe(delay(this.randomNumber()));

  get packagesReturned$() {
    return this.dataLabels([650, 1000, 2000, 800]);
  }

  get packagesRushed$() {
    return this.dataLabels([450, 650, 1400, 2600]);
  }

  get packagesShipped$() {
    return this.dataLabels([4000, 16000, 24500, 51000]);
  }
}
